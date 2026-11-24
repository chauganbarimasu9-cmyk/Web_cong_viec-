// ===== DANH SÁCH ĐẠI LÝ HỢP TÁC ĐỒNG TÂM – KHU VỰC 27, TIỂU KHU 127001 (Cần Thơ) =====
// Nguồn: file "2026_ TMDT_Danh sach Nhan su Dai ly su dung zalo-27 -01.xlsx" (BM01), lấy ngày 24/11/2026.
// Dùng cho bản riêng /kv27/: index.html (web khách), to-roi.html và to-roi-web.html (tờ rơi).
//   - sdt: 1 số Zalo của cửa hàng (file chỉ có giám đốc/chủ). Không ghi họ tên.
//   - lat/lng: trung tâm phường (gần đúng, ganDung). Nút "Chỉ đường" tìm theo địa chỉ.

var HOTLINE_HO_TRO = '0705304244';          // Hotline hỗ trợ kỹ thuật / báo giá công trình
var ZALO_HO_TRO = '0705304244';             // Zalo hỗ trợ & tư vấn
var HOTLINE_HO_TRO_TEN = 'Hỗ trợ kỹ thuật Đồng Tâm';
var LINK_MAP_TAT_CA = '';

var DAI_LY = [
  { ma:'101096', ten:'Giang Anh', tenDay:'CÔNG TY TNHH XÂY DỰNG THƯƠNG MẠI GIANG ANH NỘI THẤT ĐẸP', khuVuc:'127001', tinh:'Cần Thơ', cuaHang:[
      { diaChi:'230 Đường 3 Tháng 2, Phường Tân An, Thành phố Cần Thơ', sdt:'0939767976', tinh:'Cần Thơ', lat:10.0257649, lng:105.7556564, ganDung:true } ]},
  { ma:'101097', ten:'Tấn Phước', tenDay:'CÔNG TY TNHH XÂY DỰNG THƯƠNG MẠI VÀ DỊCH VỤ TẤN PHƯỚC', khuVuc:'127001', tinh:'Cần Thơ', cuaHang:[
      { diaChi:'98/14 Tầm Vu, Phường Tân An, Thành phố Cần Thơ', sdt:'0917239378', tinh:'Cần Thơ', lat:10.0257649, lng:105.7556564, ganDung:true } ]},
  { ma:'101098', ten:'Phan Thành Chí', tenDay:'CÔNG TY TNHH MỘT THÀNH VIÊN PHAN THÀNH CHÍ', khuVuc:'127001', tinh:'Cần Thơ', cuaHang:[
      { diaChi:'23A, Mậu Thân, Phường Ninh Kiều, Thành phố Cần Thơ', sdt:'0903651831', tinh:'Cần Thơ', lat:10.0354671, lng:105.7791327, ganDung:true } ]},
  { ma:'101099', ten:'Hải Đăng', tenDay:'DOANH NGHIỆP TƯ NHÂN HẢI ĐĂNG', khuVuc:'127001', tinh:'Cần Thơ', cuaHang:[
      { diaChi:'15A - 17 Lý Tự Trọng, Phường Ninh Kiều, Thành phố Cần Thơ', sdt:'0919811599', tinh:'Cần Thơ', lat:10.0354671, lng:105.7791327, ganDung:true } ]},
  { ma:'101100', ten:'Nhà Đẹp', tenDay:'CÔNG TY TNHH VẬT LIỆU XÂY DỰNG TRANG TRÍ NỘI THẤT NHÀ ĐẸP', khuVuc:'127001', tinh:'Cần Thơ', cuaHang:[
      { diaChi:'54 Đường 3/2, Phường Ninh Kiều, Thành phố Cần Thơ', sdt:'0939836999', tinh:'Cần Thơ', lat:10.0354671, lng:105.7791327, ganDung:true } ]},
  { ma:'101694', ten:'Diễm Ngân', tenDay:'DOANH NGHIỆP TN DIỄM NGÂN', khuVuc:'127001', tinh:'Cần Thơ', cuaHang:[
      { diaChi:'170 Đường 3/2, Phường Tân An, Thành phố Cần Thơ', sdt:'0988160567', tinh:'Cần Thơ', lat:10.0257649, lng:105.7556564, ganDung:true } ]},
  { ma:'101697', ten:'Hoàng Gia', tenDay:'CÔNG TY TNHH HOÀNG GIA', khuVuc:'127001', tinh:'Cần Thơ', cuaHang:[
      { diaChi:'182A, Đường 3/2, Phường Tân An, Thành phố Cần Thơ', sdt:'0939880540', tinh:'Cần Thơ', lat:10.0257649, lng:105.7556564, ganDung:true } ]},
  { ma:'102268', ten:'T.D.A', tenDay:'CÔNG TY TNHH MỘT THÀNH VIÊN THIẾT KẾ XÂY DỰNG THƯƠNG MẠI T.D.A', khuVuc:'127001', tinh:'Cần Thơ', cuaHang:[
      { diaChi:'B20-21, Đường Số 1, Khu dân cư Văn Hoá Tây Đô, Phường Cái Răng, Thành phố Cần Thơ', sdt:'0976202525', tinh:'Cần Thơ', lat:9.9847041, lng:105.7644596, ganDung:true } ]},
  { ma:'103086', ten:'Đại Quang', tenDay:'CÔNG TY TNHH THƯƠNG MẠI SẢN XUẤT XÂY DỰNG ĐẠI QUANG', khuVuc:'127001', tinh:'Cần Thơ', cuaHang:[
      { diaChi:'Số 8 - 10, Trần Hoàng Na, KDC Hồng Loan, Phường Cái Răng, Thành phố Cần Thơ', sdt:'0907598594', tinh:'Cần Thơ', lat:9.9847041, lng:105.7644596, ganDung:true } ]},
  { ma:'105593', ten:'Anh Tuấn', tenDay:'CÔNG TY TNHH SẢN XUẤT TRANG TRÍ ANH TUẤN', khuVuc:'127001', tinh:'Cần Thơ', cuaHang:[
      { diaChi:'53B - 55B- 57B Trần Hoàng Na, Khu vực 2, Phường An Bình, Thành phố Cần Thơ', sdt:'0967480999', tinh:'Cần Thơ', lat:9.9983647, lng:105.7057792, ganDung:true } ]},
  { ma:'107807', ten:'Vân Nam', tenDay:'CÔNG TY TNHH MỘT THÀNH VIÊN VẬT LIỆU XÂY DỰNG VÂN NAM', khuVuc:'127001', tinh:'Cần Thơ', cuaHang:[
      { diaChi:'133, Đường 3/2, Phường Tân An, Thành phố Cần Thơ', sdt:'0907999279', tinh:'Cần Thơ', lat:10.0257649, lng:105.7556564, ganDung:true } ]},
  { ma:'109995', ten:'Vĩnh Linh', tenDay:'CÔNG TY TNHH MỘT THÀNH VIÊN TƯ VẤN XÂY DỰNG VĨNH LINH', khuVuc:'127001', tinh:'Cần Thơ', cuaHang:[
      { diaChi:'280B/14, Đường Nguyễn Văn Linh, Khu vực Bình Dương, Phường Long Tuyền, Thành phố Cần Thơ', sdt:'0932949933', tinh:'Cần Thơ', lat:10.0462977, lng:105.7233814, ganDung:true } ]},
  { ma:'111097', ten:'Ngọc Nhân', tenDay:'CÔNG TY TNHH THƯƠNG MẠI-XÂY DỰNG NGỌC NHÂN-HƯNG PHÚC THỊNH', khuVuc:'127001', tinh:'Cần Thơ', cuaHang:[
      { diaChi:'Số 407A, Đường Nguyễn Văn Cừ, Phường An Bình, Thành phố Cần Thơ', sdt:'0949761122', tinh:'Cần Thơ', lat:9.9983647, lng:105.7057792, ganDung:true } ]},
  { ma:'111795', ten:'Hoa Thành Phát', tenDay:'CÔNG TY TNHH MỘT THÀNH VIÊN ĐẦU TƯ HOA THÀNH PHÁT', khuVuc:'127001', tinh:'Cần Thơ', cuaHang:[
      { diaChi:'K2-1 Võ Nguyên Giáp, Phường Hưng Phú, Thành phố Cần Thơ', sdt:'0943837862', tinh:'Cần Thơ', lat:9.9932689, lng:105.8114175, ganDung:true } ]},
  { ma:'112197', ten:'Hoàng Điểm', tenDay:'CÔNG TY TNHH THƯƠNG MẠI TRANG TRÍ NỘI THẤT HOÀNG ĐIỂM', khuVuc:'127001', tinh:'Cần Thơ', cuaHang:[
      { diaChi:'345 Nguyễn Văn Linh, Phường Tân An, Thành phố Cần Thơ', sdt:'0939141750', tinh:'Cần Thơ', lat:10.0257649, lng:105.7556564, ganDung:true } ]},
  { ma:'112481', ten:'Tân Thuận Phát', tenDay:'CÔNG TY CỔ PHẦN TÂN THUẬN PHÁT GROUP', khuVuc:'127001', tinh:'Cần Thơ', cuaHang:[
      { diaChi:'Số 84A, Đường Mậu Thân, Phường Cái Khế, Thành phố Cần Thơ', sdt:'0943778879', tinh:'Cần Thơ', lat:10.0485897, lng:105.7879371, ganDung:true } ]},
  { ma:'113432', ten:'Hùng Diễm', tenDay:'HỘ KINH DOANH HÙNG DIỄM', khuVuc:'127001', tinh:'Cần Thơ', cuaHang:[
      { diaChi:'68/1 đường Trương Vĩnh Nguyên, Phường Cái Răng, Thành phố Cần Thơ', sdt:'0917364696', tinh:'Cần Thơ', lat:9.9847041, lng:105.7644596, ganDung:true } ]},
  { ma:'113252', ten:'Phương Vũ', tenDay:'CÔNG TY TNHH THƯƠNG MẠI DỊCH VỤ XÂY DỰNG PHƯƠNG VŨ', khuVuc:'127001', tinh:'Cần Thơ', cuaHang:[
      { diaChi:'A20, KV Yên Hạ, Phường Cái Răng, Thành phố Cần Thơ', sdt:'0917407171', tinh:'Cần Thơ', lat:9.9847041, lng:105.7644596, ganDung:true } ]},
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
