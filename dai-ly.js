// ===== DANH SÁCH ĐẠI LÝ HỢP TÁC ĐỒNG TÂM – KHU VỰC KV25-05, KV25-06 (Đồng Tháp) =====
// Nguồn: file "Danh Sach Dai Ly.xlsx" (BM01), cập nhật 23/11/2026. Chỉ giữ 27 cửa hàng khu vực 25-05 và 25-06 (24/11/2026).
// Dùng chung cho: index.html (web khách) và to-roi.html (tờ rơi).
//
// Mỗi đại lý có 1 "ma" (mã SAP Đồng Tâm), nằm trên link QR: .../?dl=<ma>
//   - sdt: 1 số Zalo của cửa hàng (ưu tiên quản lý cửa hàng, rồi chủ, rồi giám đốc). Không ghi họ tên nhân viên.
//   - lat/lng: toạ độ để tính "đại lý gần nhất".
//   - ganDung: true = toạ độ lấy theo trung tâm xã/phường (gần đúng). Nút "Chỉ đường" khi đó tìm theo địa chỉ.

var HOTLINE_HO_TRO = '0901038389';          // Hotline hỗ trợ kỹ thuật / báo giá công trình
var ZALO_HO_TRO = '0939164171';             // Zalo hỗ trợ & tư vấn
var HOTLINE_HO_TRO_TEN = 'Hỗ trợ kỹ thuật Đồng Tâm';
var LINK_MAP_TAT_CA = '';

var DAI_LY = [
  { ma:'112953', ten:'Nguyên Hồng Phát', tenDay:'Công Ty TNHH TMXD VT Nguyên Hồng Phát', khuVuc:'KV25-06', tinh:'Đồng Tháp', cuaHang:[
      { diaChi:'Số 825 đường 30/4, phường Mỹ Ngãi, tỉnh Đồng Tháp', sdt:'0948012702', tinh:'Đồng Tháp', lat:10.5294622, lng:105.629523, ganDung:true } ]},
  { ma:'101655', ten:'Nguyễn Hoàng Kim', tenDay:'Cty TNHH TM Nguyễn Hoàng Kim', khuVuc:'KV25-06', tinh:'Đồng Tháp', cuaHang:[
      { diaChi:'Số 070, Ấp An Lạc, Phường Mỹ Trà, Tỉnh Đồng Tháp', sdt:'0947929280', tinh:'Đồng Tháp', lat:10.478332, lng:105.6705801, ganDung:true } ]},
  { ma:'102102', ten:'Phúc Lợi Đồng Tháp', tenDay:'Cty TNHH Phúc Lợi Đồng Tháp', khuVuc:'KV25-06', tinh:'Đồng Tháp', cuaHang:[
      { diaChi:'Ấp An Định, Phường Mỹ Trà, Tỉnh Đồng Tháp', sdt:'0911727647', tinh:'Đồng Tháp', lat:10.478332, lng:105.6705801, ganDung:true } ]},
  { ma:'100003', ten:'Thái Hoàng', tenDay:'Cty TNHH MTV SX TM XD VT Thái Hoàng', khuVuc:'KV25-06', tinh:'Đồng Tháp', cuaHang:[
      { diaChi:'494, Đường 304, Phường Mỹ Ngãi, Tỉnh Đồng Tháp', sdt:'0976990799', tinh:'Đồng Tháp', lat:10.5294622, lng:105.629523, ganDung:true } ]},
  { ma:'104903', ten:'Ngọc Tân', tenDay:'HKD Ngọc Tân', khuVuc:'KV25-06', tinh:'Đồng Tháp', cuaHang:[
      { diaChi:'Số 646, Tổ 8, Ấp 1, Phường Mỹ Ngãi, Tỉnh Đồng Tháp', sdt:'0776336551', tinh:'Đồng Tháp', lat:10.5294622, lng:105.629523, ganDung:true } ]},
  { ma:'109841', ten:'Nội thất Phước Long', tenDay:'HKD SHOWROOM NỘI THẤT PHƯỚC LONG', khuVuc:'KV25-06', tinh:'Đồng Tháp', cuaHang:[
      { diaChi:'Khóm 3, Xã Tháp Mười, Tỉnh Đồng Tháp', sdt:'0834909343', tinh:'Đồng Tháp', lat:10.5187739, lng:105.8407722, ganDung:true } ]},
  { ma:'111820', ten:'Thanh Bình TK', tenDay:'Cty TNHH Thanh Bình TK', khuVuc:'KV25-06', tinh:'Đồng Tháp', cuaHang:[
      { diaChi:'Số 117-119-121, đường Gò Tháp, Khóm 3, Xã Tháp Mười, tỉnh Đồng Tháp', sdt:'0918940314', tinh:'Đồng Tháp', lat:10.5187739, lng:105.8407722, ganDung:true } ]},
  { ma:'112552', ten:'Kim Hiền', tenDay:'HKD Kim Hiền', khuVuc:'KV25-06', tinh:'Đồng Tháp', cuaHang:[
      { diaChi:'QL 30, ấp Bình Hòa, Xã Bình Thành, tỉnh Đồng Tháp', sdt:'0868942312', tinh:'Đồng Tháp', lat:10.5766484, lng:105.5591615, ganDung:true } ]},
  { ma:'112391', ten:'Nguyễn Tình', tenDay:'Công Ty TNHH ĐT- TM &DV Nguyễn Tình', khuVuc:'KV25-06', tinh:'Đồng Tháp', cuaHang:[
      { diaChi:'Quốc lộ 30, ấp Trung, xã Tân Thạnh, tỉnh Đồng Tháp', sdt:'0383666777', tinh:'Đồng Tháp', lat:10.6031915, lng:105.4653897, ganDung:true } ]},
  { ma:'111808', ten:'Tâm Ánh Hồng', tenDay:'Công Ty TNHH Tâm Ánh Hồng', khuVuc:'KV25-06', tinh:'Đồng Tháp', cuaHang:[
      { diaChi:'Số 17, Đường Cách Mạng Tháng Tám, tổ 2, khóm 1, Phường Cao Lãnh, tỉnh Đồng Tháp', sdt:'0918360202', tinh:'Đồng Tháp', lat:10.4422401, lng:105.629523, ganDung:true } ]},
  { ma:'112753', ten:'Thư Phúc', tenDay:'HKD Thư Phúc', khuVuc:'KV25-06', tinh:'Đồng Tháp', cuaHang:[
      { diaChi:'Số 1491, đường 30/4, tổ 58, khóm 5, Phường Mỹ Ngãi, tỉnh Đồng Tháp', sdt:'0916913960', tinh:'Đồng Tháp', lat:10.5294622, lng:105.629523, ganDung:true } ]},
  { ma:'111847', ten:'Anh Tư', tenDay:'HỘ KINH DOANH CỬA HÀNG TRANG TRÍ NỘI THẤT ANH TƯ', khuVuc:'KV25-05', tinh:'Đồng Tháp', cuaHang:[
      { diaChi:'Tổ 3, ấp Bình Hưng, Phường Hồng Ngự, tỉnh Đồng Tháp', sdt:'0907088909', tinh:'Đồng Tháp', lat:10.8486265, lng:105.3716684, ganDung:true } ]},
  { ma:'112543', ten:'HN Phương Thanh', tenDay:'CÔNG TY TNHH MTV HN PHƯƠNG THANH', khuVuc:'KV25-05', tinh:'Đồng Tháp', cuaHang:[
      { diaChi:'Số 23, đường Nguyễn Văn Cừ, Khóm 4, Phường Hồng Ngự, Tỉnh Đồng Tháp', sdt:'0845030793', tinh:'Đồng Tháp', lat:10.8486265, lng:105.3716684, ganDung:true } ]},
  { ma:'107227', ten:'Hồng Thắng', tenDay:'HKD Hồng Thắng', khuVuc:'KV25-05', tinh:'Đồng Tháp', cuaHang:[
      { diaChi:'113 - 115 Trần Hưng Đạo, Phường Hồng Ngự, Tỉnh Đồng Tháp', sdt:'0359296947', tinh:'Đồng Tháp', lat:10.8486265, lng:105.3716684, ganDung:true } ]},
  { ma:'104992', ten:'Thanh Huy', tenDay:'HỘ KINH DOANH THANH HUY', khuVuc:'KV25-05', tinh:'Đồng Tháp', cuaHang:[
      { diaChi:'Đường Trần Hưng Đạo, Khóm 1, Xã Tràm Chim, Tỉnh Đồng Tháp', sdt:'0949377446', tinh:'Đồng Tháp', lat:10.7272256, lng:105.6060661, ganDung:true } ]},
  { ma:'106109', ten:'Đại Nam', tenDay:'HỘ KINH DOANH ĐẠI NAM', khuVuc:'KV25-05', tinh:'Đồng Tháp', cuaHang:[
      { diaChi:'Đường Võ Văn Kiệt, Khóm 3, Xã Tràm Chim, Tỉnh Đồng Tháp', sdt:'0907965676', tinh:'Đồng Tháp', lat:10.7272256, lng:105.6060661, ganDung:true } ]},
  { ma:'112437', ten:'Ngọc Linh Trân', tenDay:'CÔNG TY TNHH NGỌC LINH TRÂN', khuVuc:'KV25-05', tinh:'Đồng Tháp', cuaHang:[
      { diaChi:'Số 07, tổ 1, ấp 1, xã Mỹ Hiệp, tỉnh Đồng Tháp', sdt:'0975687899', tinh:'Đồng Tháp', lat:10.3469362, lng:105.7938069, ganDung:true } ]},
  { ma:'102039', ten:'Thu Trang', tenDay:'Hộ Kinh Doanh Thu Trang', khuVuc:'KV25-05', tinh:'Đồng Tháp', cuaHang:[
      { diaChi:'Số 735 Quốc Lộ 80, Ấp Bình Lợi, Xã Lấp Vò, Tỉnh Đồng Tháp', sdt:'0345580110', tinh:'Đồng Tháp', lat:10.3574219, lng:105.5826123, ganDung:true } ]},
  { ma:'112693', ten:'Thành Tín Đồng Tháp', tenDay:'CÔNG TY TNHH THƯƠNG MẠI VÀ XÂY DỰNG THÀNH TÍN ĐỒNG THÁP', khuVuc:'KV25-05', tinh:'Đồng Tháp', cuaHang:[
      { diaChi:'106 ấp Bình Hiệp B, xã Lấp Vò, tỉnh Đồng Tháp', sdt:'0828432932', tinh:'Đồng Tháp', lat:10.3574219, lng:105.5826123, ganDung:true } ]},
  { ma:'110190', ten:'Trọng Nghĩa Lai Vung', tenDay:'CÔNG TY TNHH VLXD TRỌNG NGHĨA LAI VUNG', khuVuc:'KV25-05', tinh:'Đồng Tháp', cuaHang:[
      { diaChi:'Số 460, Khóm 2, Xã Hòa Long, Tỉnh Đồng Tháp', sdt:'0939961220', tinh:'Đồng Tháp', lat:10.2657509, lng:105.6764461, ganDung:true } ]},
  { ma:'112660', ten:'Phước Tiến', tenDay:'CÔNG TY TNHH VẬT LIỆU XÂY DỰNG PHƯỚC TIẾN', khuVuc:'KV25-05', tinh:'Đồng Tháp', cuaHang:[
      { diaChi:'144B/4, ấp Hòa Tân, xã Phong Hòa, tỉnh Đồng Tháp', sdt:'0907997586', tinh:'Đồng Tháp', lat:10.2016835, lng:105.652983, ganDung:true } ]},
  { ma:'112752', ten:'Trọng Phú Sa Đéc', tenDay:'CÔNG TY TNHH MTV TRỌNG PHÚ SA ĐÉC', khuVuc:'KV25-05', tinh:'Đồng Tháp', cuaHang:[
      { diaChi:'Số 593, đường 848, khóm Sa Nhiên, phường Sa Đéc, tỉnh Đồng Tháp', sdt:'0907910969', tinh:'Đồng Tháp', lat:10.3057678, lng:105.7468535, ganDung:true } ]},
  { ma:'101658', ten:'Tài Quí', tenDay:'DOANH NGHIỆP TƯ NHÂN TÀI QUÍ', khuVuc:'KV25-05', tinh:'Đồng Tháp', cuaHang:[
      { diaChi:'Số 530, đường Trần Hưng Đạo, Khóm Sa Giang, Phường Sa Đéc, Tỉnh Đồng Tháp', sdt:'0901070956', tinh:'Đồng Tháp', lat:10.3057678, lng:105.7468535, ganDung:true } ]},
  { ma:'101660', ten:'Phước Hòa Sa Đéc', tenDay:'CÔNG TY TRÁCH NHIỆM HỮU HẠN MỘT THÀNH VIÊN PHƯỚC HÒA SA ĐÉC', khuVuc:'KV25-05', tinh:'Đồng Tháp', cuaHang:[
      { diaChi:'Số 36 Quốc Lộ 80, Khóm Hòa An, Phường Sa Đéc, Tỉnh Đồng Tháp', sdt:'0907227157', tinh:'Đồng Tháp', lat:10.3057678, lng:105.7468535, ganDung:true } ]},
  { ma:'111926', ten:'Tín Thuận Phát', tenDay:'Công ty TNHH TM DV XD Tín Thuận Phát', khuVuc:'KV25-05', tinh:'Đồng Tháp', cuaHang:[
      { diaChi:'Số 04 06, Lê Thị Riêng, Phường Cao Lãnh, tỉnh Đồng Tháp', sdt:'0763560057', tinh:'Đồng Tháp', lat:10.465205, lng:105.629806 } ]},
  { ma:'112324', ten:'Thắng Phát', tenDay:'CÔNG TY TNHH TRANG TRÍ NỘI THẤT THẮNG PHÁT', khuVuc:'KV25-05', tinh:'Đồng Tháp', cuaHang:[
      { diaChi:'Số 44, đường Tôn Đức Thắng, khóm Tân Bình, phường Sa Đéc, tỉnh Đồng Tháp', sdt:'0911811969', tinh:'Đồng Tháp', lat:10.3057678, lng:105.7468535, ganDung:true } ]},
  { ma:'102038', ten:'Công Minh', tenDay:'HỘ KINH DOANH CÔNG MINH', khuVuc:'KV25-05', tinh:'Đồng Tháp', cuaHang:[
      { diaChi:'Tân Lập, Xã Tân Phú Trung, Tỉnh Đồng Tháp', sdt:'0907151959', tinh:'Đồng Tháp', lat:10.2393828, lng:105.7703287, ganDung:true } ]},
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
