/**
 * PHỐI GẠCH BẰNG AI - phần máy chủ (Google Apps Script)
 * Web khách gửi: ảnh phòng + tên file mặt gạch + chế độ (sàn/tường) -> script gọi Gemini -> trả ảnh phối.
 * Khoá Gemini nằm trong "Thuộc tính tập lệnh" (Script properties), KHÔNG để trong mã này và KHÔNG đưa lên GitHub.
 *
 * Thuộc tính cần đặt (Project Settings > Script properties):
 *   GEMINI_KEY   = khoá API tạo ở Google AI Studio (bắt buộc)
 *   GEMINI_MODEL = (tuỳ chọn) mã mô hình ảnh, mặc định bên dưới. Chạy hàm lietKeModel() để xem tên đang dùng được.
 *   LUOT_NGAY    = (tuỳ chọn) số ảnh tối đa mỗi thiết bị mỗi ngày, mặc định 3
 *   TRAN_NGAY    = (tuỳ chọn) tổng số ảnh tối đa mỗi ngày cho cả web, mặc định 150 (trần chi phí)
 */
var MODEL_MAC_DINH = 'gemini-3.1-flash-image-preview';
var NGUON_ANH = 'https://lechilinhwork-lgtm.github.io/anh/face/';   // chỉ cho phép lấy mặt gạch từ đây

function prop_(k, mac) { var v = PropertiesService.getScriptProperties().getProperty(k); return v ? v : mac; }
function ngay_() { return Utilities.formatDate(new Date(), 'Asia/Ho_Chi_Minh', 'yyyyMMdd'); }
function json_(o) { return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON); }

function doGet(e) {
  return json_({ ok: true, dich_vu: 'phoi-gach-ai', con: Math.max(0, +prop_('TRAN_NGAY', 150) - +prop_('d_' + ngay_(), 0)) });
}

function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    var b = JSON.parse(e.postData.contents);
    var dev = String(b.dev || '').replace(/[^a-zA-Z0-9_-]/g, '').slice(0, 40);
    if (!dev || !b.phong || String(b.phong).length > 2200000) return json_({ ok: false, loi: 'du_lieu' });
    if (!b.mat || String(b.mat).indexOf('/') >= 0 || !/\.jpg$/i.test(b.mat)) return json_({ ok: false, loi: 'du_lieu' });
    var key = prop_('GEMINI_KEY', '');
    if (!key) return json_({ ok: false, loi: 'chua_cau_hinh' });

    // giới hạn lượt (khoá để tránh 2 yêu cầu cùng lúc đếm sai)
    lock.waitLock(10000);
    var P = PropertiesService.getScriptProperties(), nd = ngay_();
    var kDev = 'u_' + nd + '_' + dev, kAll = 'd_' + nd;
    var daDung = +P.getProperty(kDev) || 0, tong = +P.getProperty(kAll) || 0;
    var maxDev = +prop_('LUOT_NGAY', 3), maxAll = +prop_('TRAN_NGAY', 150);
    if (tong >= maxAll) return json_({ ok: false, loi: 'tran_ngay' });
    if (daDung >= maxDev) return json_({ ok: false, loi: 'het_luot', con: 0 });
    P.setProperty(kDev, String(daDung + 1)); P.setProperty(kAll, String(tong + 1));
    lock.releaseLock();

    var r = UrlFetchApp.fetch(NGUON_ANH + encodeURIComponent(b.mat), { muteHttpExceptions: true });
    if (r.getResponseCode() !== 200) { hoan_(kDev, kAll); return json_({ ok: false, loi: 'khong_co_mat_gach' }); }
    var mat = Utilities.base64Encode(r.getBlob().getBytes());

    var tuong = b.che_do === 'tuong';
    var prompt = String(b.loi || '').slice(0, 900) ||
      ('Hãy ' + (tuong ? 'ốp gạch lên tường' : 'lát gạch lên sàn') + ' trong ảnh phòng thứ nhất bằng mẫu gạch ở ảnh thứ hai. ' +
       'Giữ nguyên bố cục phòng, đồ đạc, ánh sáng và góc chụp; chỉ thay bề mặt ' + (tuong ? 'tường' : 'sàn') + '. ' +
       'Chia viên đúng khổ, ron mảnh khoảng 2 mm, vân lấy đúng từ ảnh mặt gạch, chân thực như ảnh chụp.');
    prompt = 'Ảnh thứ nhất là ảnh căn phòng của khách, ảnh thứ hai là mặt viên gạch. ' + prompt;

    var model = prop_('GEMINI_MODEL', MODEL_MAC_DINH);
    var url = 'https://generativelanguage.googleapis.com/v1beta/models/' + model + ':generateContent';
    var body = {
      contents: [{ parts: [
        { text: prompt },
        { inline_data: { mime_type: 'image/jpeg', data: String(b.phong) } },
        { inline_data: { mime_type: 'image/jpeg', data: mat } }
      ] }],
      generationConfig: { responseModalities: ['IMAGE', 'TEXT'] }
    };
    var g = UrlFetchApp.fetch(url, { method: 'post', contentType: 'application/json', headers: { 'x-goog-api-key': key }, payload: JSON.stringify(body), muteHttpExceptions: true });
    var kq = JSON.parse(g.getContentText());
    var parts = (((kq.candidates || [])[0] || {}).content || {}).parts || [];
    for (var i = 0; i < parts.length; i++) {
      var d = parts[i].inlineData || parts[i].inline_data;
      if (d && d.data) return json_({ ok: true, img: 'data:' + (d.mimeType || d.mime_type || 'image/png') + ';base64,' + d.data, con: Math.max(0, maxDev - daDung - 1) });
    }
    hoan_(kDev, kAll);
    Logger.log(g.getResponseCode() + ' ' + g.getContentText().slice(0, 600));
    return json_({ ok: false, loi: 'khong_tao_duoc', ma: g.getResponseCode(), chi_tiet: g.getContentText().slice(0, 400).replace(/AIza[0-9A-Za-z_-]+/g, '***') });
  } catch (err) {
    try { lock.releaseLock(); } catch (x) {}
    Logger.log(String(err));
    return json_({ ok: false, loi: 'loi_may_chu' });
  }
}

// trả lại lượt nếu không tạo được ảnh (lỗi không phải do khách)
function hoan_(kDev, kAll) {
  var P = PropertiesService.getScriptProperties();
  P.setProperty(kDev, String(Math.max(0, (+P.getProperty(kDev) || 1) - 1)));
  P.setProperty(kAll, String(Math.max(0, (+P.getProperty(kAll) || 1) - 1)));
}

// Chạy tay trong trình soạn thảo: xem mô hình ảnh nào dùng được với khoá của anh
function lietKeModel() {
  var key = prop_('GEMINI_KEY', '');
  var r = UrlFetchApp.fetch('https://generativelanguage.googleapis.com/v1beta/models?pageSize=200', { headers: { 'x-goog-api-key': key }, muteHttpExceptions: true });
  var ds = (JSON.parse(r.getContentText()).models || []).map(function (m) { return m.name.replace('models/', ''); }).filter(function (n) { return /image/i.test(n); });
  Logger.log(ds.join('\n') || r.getContentText().slice(0, 400));
}

// Dọn bộ đếm cũ (đặt trigger hằng ngày, hoặc chạy tay thỉnh thoảng)
function donDep() {
  var P = PropertiesService.getScriptProperties(), all = P.getProperties(), nd = ngay_();
  Object.keys(all).forEach(function (k) { if (/^(u|d)_\d{8}/.test(k) && k.indexOf(nd) < 0) P.deleteProperty(k); });
}
