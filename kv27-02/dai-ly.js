// ===== DANH SÁCH ĐẠI LÝ HỢP TÁC ĐỒNG TÂM – KHU VỰC 27, TIỂU KHU 127002 (KV27-02, Cần Thơ) =====
// Nguồn: file "2026_ TMDT_Danh sach Nhan su Dai ly su dung zalo-27 -01_kv02-27.xlsx" (sheet KV02-27), lấy ngày 25/11/2026.
// Dùng cho bản riêng /kv27-02/: index.html (web khách), to-roi.html và to-roi-web.html (tờ rơi).
//   - sdt: 1 số Zalo của cửa hàng (file chỉ có giám đốc/chủ). Không ghi họ tên.
//   - lat/lng: trung tâm phường (gần đúng, ganDung). Nút "Chỉ đường" tìm theo địa chỉ.

var HOTLINE_HO_TRO = '0393939407';          // Hotline hỗ trợ kỹ thuật / báo giá công trình
var ZALO_HO_TRO = '0393939407';             // Zalo hỗ trợ & tư vấn
var HOTLINE_HO_TRO_TEN = 'Hỗ trợ kỹ thuật Đồng Tâm';
var LINK_MAP_TAT_CA = '';

var DAI_LY = [
  { ma:'113183', ten:'Nam Phú', tenDay:'CÔNG TY TNHH GẠCH MEN NAM PHÚ', khuVuc:'127002', tinh:'Cần Thơ', cuaHang:[
      { diaChi:'Cạnh 51A QL1A Ba Láng, Phường Cái Răng, Thành phố Cần Thơ', sdt:'0939661899', tinh:'Cần Thơ', lat:9.9847041, lng:105.7644596, ganDung:true } ]},
  { ma:'113184', ten:'Phú Lộc', tenDay:'CÔNG TY TNHH PHÚ LỘC', khuVuc:'127002', tinh:'Cần Thơ', cuaHang:[
      { diaChi:'1021 Tôn Đức Thắng, KV 12, Phường Ô Môn, Thành phố Cần Thơ', sdt:'0939904455', tinh:'Cần Thơ', lat:10.1149, lng:105.628, ganDung:true } ]},
  { ma:'113189', ten:'Diệu Cường', tenDay:'CÔNG TY TNHH VLXD DIỆU CƯỜNG', khuVuc:'127002', tinh:'Cần Thơ', cuaHang:[
      { diaChi:'KV Tân Phước 1, Phường Thuận Hưng, Thành phố Cần Thơ', sdt:'0944110018', tinh:'Cần Thơ', lat:10.205, lng:105.562, ganDung:true } ]},
  { ma:'101094', ten:'Điền Phong', tenDay:'CÔNG TY TNHH THƯƠNG MẠI VÀ DỊCH VỤ ĐIỀN PHONG', khuVuc:'127002', tinh:'Cần Thơ', cuaHang:[
      { diaChi:'Lô 1, Số 20-21 Lê Hồng Phong, Phường Bình Thủy, Thành phố Cần Thơ', sdt:'0939879079', tinh:'Cần Thơ', lat:10.07, lng:105.755, ganDung:true } ]},
  { ma:'101103', ten:'Ca Ta', tenDay:'CÔNG TY TRÁCH NHIỆM HỮU HẠN THƯƠNG MẠI VÀ DỊCH VỤ CA TA', khuVuc:'127002', tinh:'Cần Thơ', cuaHang:[
      { diaChi:'62 Võ Trường Toản, Phường Cái Khế, Thành phố Cần Thơ', sdt:'0913969823', tinh:'Cần Thơ', lat:10.0485897, lng:105.7879371, ganDung:true } ]},
  { ma:'101107', ten:'Quỳnh An', tenDay:'CÔNG TY TNHH XÂY DỰNG THƯƠNG MẠI DỊCH VỤ QUỲNH AN', khuVuc:'127002', tinh:'Cần Thơ', cuaHang:[
      { diaChi:'A30-29 Đường Nguyễn Văn Cừ, Ấp Mỹ Phước, Phường An Bình, Thành phố Cần Thơ', sdt:'0943629838', tinh:'Cần Thơ', lat:9.9983647, lng:105.7057792, ganDung:true } ]},
  { ma:'101108', ten:'Sơn Lộc Phát', tenDay:'CÔNG TY TNHH MỘT THÀNH VIÊN SƠN LỘC PHÁT', khuVuc:'127002', tinh:'Cần Thơ', cuaHang:[
      { diaChi:'378 Quốc Lộ 91, Khu Vực Long Thạnh A, Phường Thốt Nốt, Thành phố Cần Thơ', sdt:'0918889493', tinh:'Cần Thơ', lat:10.2697, lng:105.5323, ganDung:true } ]},
  { ma:'101109', ten:'Nguyễn Tuấn', tenDay:'CÔNG TY TNHH MỘT THÀNH VIÊN TRANG TRÍ NỘI THẤT NGUYỄN TUẤN', khuVuc:'127002', tinh:'Cần Thơ', cuaHang:[
      { diaChi:'Ấp Thới Phong A, Xã Thới Lai, Thành phố Cần Thơ', sdt:'0939209277', tinh:'Cần Thơ', lat:10.065, lng:105.558, ganDung:true } ]},
  { ma:'104544', ten:'Thịnh Phát', tenDay:'HỘ KINH DOANH CỬA HÀNG VẬT LIỆU XÂY DỰNG - TRANG TRÍ NỘI THẤT THỊNH PHÁT', khuVuc:'127002', tinh:'Cần Thơ', cuaHang:[
      { diaChi:'Khu vực Hòa An A, Phường Ô Môn, Thành phố Cần Thơ', sdt:'0934464404', tinh:'Cần Thơ', lat:10.1149, lng:105.628, ganDung:true } ]},
  { ma:'106165', ten:'Phát Thành', tenDay:'CÔNG TY TNHH THƯƠNG MẠI TỔNG HỢP VÀ ĐẦU TƯ XÂY DỰNG PHÁT THÀNH', khuVuc:'127002', tinh:'Cần Thơ', cuaHang:[
      { diaChi:'Ấp Thới Thuận A, Xã Thới Lai, Thành phố Cần Thơ', sdt:'0917433596', tinh:'Cần Thơ', lat:10.065, lng:105.558, ganDung:true } ]},
  { ma:'109358', ten:'PKY Việt Nam', tenDay:'CÔNG TY TNHH PKY VIỆT NAM', khuVuc:'127002', tinh:'Cần Thơ', cuaHang:[
      { diaChi:'Số 115, KV2, Phường Cái Răng, Thành phố Cần Thơ', sdt:'0828737678', tinh:'Cần Thơ', lat:9.9847041, lng:105.7644596, ganDung:true } ]},
  { ma:'109472', ten:'Bảo Toàn', tenDay:'DOANH NGHIỆP TƯ NHÂN VẬT LIỆU XÂY DỰNG BẢO TOÀN', khuVuc:'127002', tinh:'Cần Thơ', cuaHang:[
      { diaChi:'Ấp Thới Xuyên, Xã Cờ Đỏ, Thành phố Cần Thơ', sdt:'0364343444', tinh:'Cần Thơ', lat:10.092, lng:105.432, ganDung:true } ]},
  { ma:'111008', ten:'Toàn Nguyên Khoa', tenDay:'CÔNG TY TNHH MỘT THÀNH VIÊN THƯƠNG MẠI TOÀN NGUYÊN KHOA', khuVuc:'127002', tinh:'Cần Thơ', cuaHang:[
      { diaChi:'196, Khu Vực Thới An 2, Phường Thốt Nốt, Thành phố Cần Thơ', sdt:'0766600314', tinh:'Cần Thơ', lat:10.2697, lng:105.5323, ganDung:true } ]},
  { ma:'113496', ten:'Gia Phát', tenDay:'CÔNG TY TNHH MTV XD GIA PHÁT', khuVuc:'127002', tinh:'Cần Thơ', cuaHang:[
      { diaChi:'Số 1950, khu vực Thới Hưng, Phường Thới Long, Thành phố Cần Thơ', sdt:'0903902056', tinh:'Cần Thơ', lat:10.139, lng:105.589, ganDung:true } ]},
  { ma:'111631', ten:'Văn Giáp', tenDay:'HỘ KINH DOANH CỬA HÀNG VẬT LIỆU XÂY DỰNG VĂN GIÁP', khuVuc:'127002', tinh:'Cần Thơ', cuaHang:[
      { diaChi:'3288 Ấp Phụng Thạnh, Xã Thạnh Quới, Thành phố Cần Thơ', sdt:'0941123787', tinh:'Cần Thơ', lat:10.22, lng:105.41, ganDung:true } ]},
  { ma:'112877', ten:'Đông Phong', tenDay:'CÔNG TY TNHH VẬT LIỆU XÂY DỰNG VÀ TRANG TRÍ NỘI THẤT ĐÔNG PHONG', khuVuc:'127002', tinh:'Cần Thơ', cuaHang:[
      { diaChi:'26, Ấp Thạnh Quới 1, Xã Trung Hưng, Thành phố Cần Thơ', sdt:'0868857486', tinh:'Cần Thơ', lat:10.146, lng:105.487, ganDung:true } ]},
];

function timDaiLy(ma){
  ma = String(ma||'').trim();
  for(var i=0;i<DAI_LY.length;i++) if(DAI_LY[i].ma===ma) return DAI_LY[i];
  return null;
}
function dinhDangSdt(s){
  s = String(s||'').replace(/\D/g,'');
  if(s.length===10) return s.slice(0,4)+' '+s.slice(4,7)+' '+s.slice(7);
  return s;
}
function linkChiDuong(ch){
  if(ch.ganDung || ch.lat==null) return 'https://www.google.com/maps/dir/?api=1&destination='+encodeURIComponent(ch.diaChi);
  return 'https://www.google.com/maps/dir/?api=1&destination='+ch.lat+','+ch.lng;
}
