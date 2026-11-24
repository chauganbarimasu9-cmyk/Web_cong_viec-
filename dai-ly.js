// ===== DANH SÁCH ĐẠI LÝ HỢP TÁC ĐỒNG TÂM – KHU VỰC KV25 (Tây Ninh, Đồng Tháp) =====
// Nguồn: file "Danh Sach Dai Ly.xlsx" (BM01), cập nhật 23/11/2026. Thay cho danh sách TP.HCM cũ.
// Dùng chung cho: index.html (web khách) và to-roi.html (tờ rơi).
//
// Mỗi đại lý có 1 "ma" (mã SAP Đồng Tâm), nằm trên link QR: .../?dl=<ma>
//   - sdt: 1 số Zalo của cửa hàng (ưu tiên quản lý cửa hàng, rồi chủ, rồi giám đốc). Không ghi họ tên nhân viên.
//   - lat/lng: toạ độ để tính "đại lý gần nhất".
//   - ganDung: true = toạ độ lấy theo trung tâm xã/phường (gần đúng). Nút "Chỉ đường" khi đó tìm theo địa chỉ.

var HOTLINE_HO_TRO = '0901038389';          // Hotline hỗ trợ kỹ thuật / báo giá công trình
var HOTLINE_HO_TRO_TEN = 'Hỗ trợ kỹ thuật Đồng Tâm';
var LINK_MAP_TAT_CA = '';

var DAI_LY = [
  { ma:'102089', ten:'Ngọc Bích', tenDay:'Cty TNHH DV - XD - TM Ngọc Bích', khuVuc:'KV25-01', tinh:'Tây Ninh', cuaHang:[
      { diaChi:'Số 440 ĐT 834, Ấp 3, Phường Long An, Tỉnh Tây Ninh', sdt:'0913876180', tinh:'Tây Ninh', lat:10.5547606, lng:106.4052541, ganDung:true } ]},
  { ma:'102090', ten:'Vĩnh Phúc', tenDay:'Cty TNHH SXTMDVXNK Vĩnh Phúc', khuVuc:'KV25-01', tinh:'Tây Ninh', cuaHang:[
      { diaChi:'Số 450, Quốc lộ 1, Phường Long An, Tỉnh Tây Ninh', sdt:'0383013990', tinh:'Tây Ninh', lat:10.5547606, lng:106.4052541, ganDung:true } ]},
  { ma:'102097', ten:'Thuận Phát - Tân An', tenDay:'DNTN Thuận Phát - Tân An', khuVuc:'KV25-01', tinh:'Tây Ninh', cuaHang:[
      { diaChi:'167 Quốc lộ 62, Phường Long An, Tỉnh Tây Ninh', sdt:'0909919989', tinh:'Tây Ninh', lat:10.5547606, lng:106.4052541, ganDung:true } ]},
  { ma:'101618', ten:'Khôi Minh Phát', tenDay:'Cty TNHH MTV Khôi Minh Phát', khuVuc:'KV25-01', tinh:'Tây Ninh', cuaHang:[
      { diaChi:'Ấp Bình Phú, Xã Nhựt Tảo, Tỉnh Tây Ninh', sdt:'0938006569', tinh:'Tây Ninh', lat:10.5727546, lng:106.4759262, ganDung:true } ]},
  { ma:'102150', ten:'VLXD Dương Tấn Long', tenDay:'Dương Tấn Long', khuVuc:'KV25-01', tinh:'Tây Ninh', cuaHang:[
      { diaChi:'Ấp Vàm Kinh, Xã Mỹ Thạnh, Tỉnh Tây Ninh', sdt:'0349253212', tinh:'Tây Ninh', lat:10.6391993, lng:106.3522658, ganDung:true } ]},
  { ma:'112843', ten:'Mạnh Thảo', tenDay:'HKD CH VLXD TTNT Mạnh Thảo', khuVuc:'KV25-01', tinh:'Tây Ninh', cuaHang:[
      { diaChi:'2561 Ấp Gia Thạnh, Xã Tầm Vu, Tỉnh Tây Ninh', sdt:'0908087793', tinh:'Tây Ninh', lat:10.4640645, lng:106.4759262, ganDung:true } ]},
  { ma:'107828', ten:'Hồng Phát', tenDay:'HKD CH VLXD TTNT HỒNG PHÁT', khuVuc:'KV25-01', tinh:'Tây Ninh', cuaHang:[
      { diaChi:'1792 ấp Phú Xuân 2, Xã Tầm Vu, Tỉnh Tây Ninh', sdt:'0919013191', tinh:'Tây Ninh', lat:10.4640645, lng:106.4759262, ganDung:true } ]},
  { ma:'110156', ten:'Gia Nguyễn', tenDay:'Cty TNHH MTV VLXD Gia Nguyễn', khuVuc:'KV25-01', tinh:'Tây Ninh', cuaHang:[
      { diaChi:'Số 197 ấp Bình Trị 2, Xã Tầm Vu, Tỉnh Tây Ninh', sdt:'0908244607', tinh:'Tây Ninh', lat:10.4640645, lng:106.4759262, ganDung:true } ]},
  { ma:'101617', ten:'Phú Gia', tenDay:'Cty Cp XD & Quảng Cáo Phú Gia', khuVuc:'KV25-01', tinh:'Tây Ninh', cuaHang:[
      { diaChi:'Số 68B Huỳnh Văn Tạo, Phường Long An, Tỉnh Tây Ninh', sdt:'0915966333', tinh:'Tây Ninh', lat:10.5547606, lng:106.4052541, ganDung:true } ]},
  { ma:'102093', ten:'Trung Tâm Bán Sỉ', tenDay:'Cty TNHH MTV Trung Tâm Bán Sỉ', khuVuc:'KV25-01', tinh:'Tây Ninh', cuaHang:[
      { diaChi:'Số 129, quốc lộ 62, Phường Khánh Hậu, Tỉnh Tây Ninh', sdt:'0918866909', tinh:'Tây Ninh', lat:10.5297499, lng:106.3640398, ganDung:true } ]},
  { ma:'102149', ten:'Lâm Xuân', tenDay:'HKD CH VLXD TTNT Lâm Xuân', khuVuc:'KV25-01', tinh:'Tây Ninh', cuaHang:[
      { diaChi:'Thửa 274, TBĐ số 232, Khu phố 3, Xã Thạnh Hóa, Tỉnh Tây Ninh', sdt:'0942130539', tinh:'Tây Ninh', lat:10.623466, lng:106.1345705, ganDung:true } ]},
  { ma:'112979', ten:'VLXD Kim Hà', tenDay:'Nguyễn Thị Kim Hà', khuVuc:'KV25-01', tinh:'Tây Ninh', cuaHang:[
      { diaChi:'Số 103 ấp Bình Tây 1, xã Bình Hiệp, tỉnh Tây Ninh', sdt:'0916234169', tinh:'Tây Ninh', lat:10.8079509, lng:105.9464874, ganDung:true } ]},
  { ma:'107714', ten:'Đức Trung', tenDay:'Cty TNHH Đức Trung', khuVuc:'KV25-01', tinh:'Tây Ninh', cuaHang:[
      { diaChi:'Số 59 đường tỉnh 827, Phường Long An, Tỉnh Tây Ninh', sdt:'0919905138', tinh:'Tây Ninh', lat:10.5547606, lng:106.4052541, ganDung:true } ]},
  { ma:'104926', ten:'Cường Tiên', tenDay:'Cty TNHH MTV VLXD Cường Tiên', khuVuc:'KV25-01', tinh:'Tây Ninh', cuaHang:[
      { diaChi:'Số 69, ấp Ông Lễ, Xã Bình Hiệp, Tỉnh Tây Ninh', sdt:'0946757676', tinh:'Tây Ninh', lat:10.8079509, lng:105.9464874, ganDung:true } ]},
  { ma:'104927', ten:'Hiệu Trâm', tenDay:'HKD Hiệu Trâm', khuVuc:'KV25-01', tinh:'Tây Ninh', cuaHang:[
      { diaChi:'Số 116, đường CMT8, Khu phố Bàu Sậy, Xã Vĩnh Hưng, Tỉnh Tây Ninh', sdt:'0823848176', tinh:'Tây Ninh', lat:10.8937638, lng:105.7703287, ganDung:true } ]},
  { ma:'110626', ten:'Phát Khánh An', tenDay:'Công ty TNHH Phát Khánh An', khuVuc:'KV25-01', tinh:'Tây Ninh', cuaHang:[
      { diaChi:'Số 147A, Ấp 1, Phường Tân An, Tỉnh Tây Ninh', sdt:'0375222163', tinh:'Tây Ninh', lat:10.516389, lng:106.4111425, ganDung:true } ]},
  { ma:'109080', ten:'Danh Tân Thạnh', tenDay:'CTY TNHH TM DV XD DT DANH TÂN THẠNH', khuVuc:'KV25-01', tinh:'Tây Ninh', cuaHang:[
      { diaChi:'Số nhà 4849, đường số 3, Xã Tân Thạnh, Tỉnh Tây Ninh', sdt:'0988040553', tinh:'Tây Ninh', lat:10.5902366, lng:106.0472785, ganDung:true } ]},
  { ma:'101992', ten:'Tư Huỳnh', tenDay:'Cty TNHH TM DV Tư Huỳnh', khuVuc:'KV25-01', tinh:'Tây Ninh', cuaHang:[
      { diaChi:'Số 59 Nguyễn Công Trung, Phường Long An, Tỉnh Tây Ninh', sdt:'0774121283', tinh:'Tây Ninh', lat:10.5547606, lng:106.4052541, ganDung:true } ]},
  { ma:'101610', ten:'VLXD Trung Nghĩa', tenDay:'TRẦN TRUNG NGHĨA', khuVuc:'25-02', tinh:'Tây Ninh', cuaHang:[
      { diaChi:'135 Quốc lộ 50, Xã Cần Giuộc, Tỉnh Tây Ninh', sdt:'0902380852', tinh:'Tây Ninh', lat:10.6048346, lng:106.6880841, ganDung:true } ]},
  { ma:'101613', ten:'Tiến Nghĩa', tenDay:'DNTN Tiến Nghĩa', khuVuc:'25-02', tinh:'Tây Ninh', cuaHang:[
      { diaChi:'Số 297 Quốc lộ 50, khu 1A, Xã Cần Đước, Tỉnh Tây Ninh', sdt:'0941991765', tinh:'Tây Ninh', lat:10.5012534, lng:106.5937658, ganDung:true } ]},
  { ma:'101614', ten:'Quốc Thanh', tenDay:'Quốc Thanh', khuVuc:'25-02', tinh:'Tây Ninh', cuaHang:[
      { diaChi:'60, Tổ 1, Khu phố 2, Xã Cần Đước, Tỉnh Tây Ninh', sdt:'0908576959', tinh:'Tây Ninh', lat:10.5012534, lng:106.5937658, ganDung:true } ]},
  { ma:'101615', ten:'Anh Bửu', tenDay:'HỘ KINH DOANH CỬA HÀNG VẬT LIỆU XÂY DỰNG ANH BỬU', khuVuc:'25-02', tinh:'Tây Ninh', cuaHang:[
      { diaChi:'Ấp 1, Xã Tân Lân, Tỉnh Tây Ninh', sdt:'0779368329', tinh:'Tây Ninh', lat:10.4987318, lng:106.6409198, ganDung:true } ]},
  { ma:'101995', ten:'Hồng Tươi', tenDay:'Vật liệu Hồng Tươi', khuVuc:'25-02', tinh:'Tây Ninh', cuaHang:[
      { diaChi:'Ấp Lộc An, Xã An Ninh, Tỉnh Tây Ninh', sdt:'0986191917', tinh:'Tây Ninh', lat:10.9742002, lng:106.3110622, ganDung:true } ]},
  { ma:'112789', ten:'Út Rãi', tenDay:'Công ty TNHH MTV TM-DV Út Rãi', khuVuc:'25-02', tinh:'Tây Ninh', cuaHang:[
      { diaChi:'Số 45 đường 3/2, Ô3, ấp Bàu Trai, xã Hậu Nghĩa, tỉnh Tây Ninh', sdt:'0944727476', tinh:'Tây Ninh', lat:10.9471833, lng:106.4052541, ganDung:true } ]},
  { ma:'102091', ten:'Ngọc Tâm', tenDay:'Công ty TNHH MTV Ngọc Tâm', khuVuc:'25-02', tinh:'Tây Ninh', cuaHang:[
      { diaChi:'Số 18A, Quốc lộ 1, Ấp 2 Mỹ Yên, Xã Mỹ Yên, Tỉnh Tây Ninh', sdt:'0908161813', tinh:'Tây Ninh', lat:10.6406242, lng:106.528946, ganDung:true } ]},
  { ma:'102092', ten:'Quang Phát', tenDay:'Công ty TNHH TMDV QUANG PHÁT', khuVuc:'25-02', tinh:'Tây Ninh', cuaHang:[
      { diaChi:'255, Ô 5, Khu B, Xã Hậu Nghĩa, Tỉnh Tây Ninh', sdt:'0949288499', tinh:'Tây Ninh', lat:10.9471833, lng:106.4052541, ganDung:true } ]},
  { ma:'102094', ten:'Thanh Phương B-L', tenDay:'Công ty TNHH MTV Thanh Phương B-L', khuVuc:'25-02', tinh:'Tây Ninh', cuaHang:[
      { diaChi:'Số 77, Quốc lộ 1A, Xã Bến Lức, Tỉnh Tây Ninh', sdt:'0913777434', tinh:'Tây Ninh', lat:10.6649296, lng:106.4818167, ganDung:true } ]},
  { ma:'102099', ten:'VLXD Ngọc Ánh', tenDay:'PHẠM THỊ NGỌC ÁNH', khuVuc:'25-02', tinh:'Tây Ninh', cuaHang:[
      { diaChi:'Số 01A, Ấp Phước Toàn, Xã Mỹ Yên, Tỉnh Tây Ninh', sdt:'0913901381', tinh:'Tây Ninh', lat:10.6406242, lng:106.528946, ganDung:true } ]},
  { ma:'102100', ten:'Dàn Vạn Đức', tenDay:'Công ty TNHH Dàn Vạn Đức', khuVuc:'25-02', tinh:'Tây Ninh', cuaHang:[
      { diaChi:'Thửa Đất Số 1957, Ấp Bình Tả 1, Xã Đức Hòa, Tỉnh Tây Ninh', sdt:'0799232879', tinh:'Tây Ninh', lat:10.791816, lng:106.4523662, ganDung:true } ]},
  { ma:'102131', ten:'Minh Lâm', tenDay:'CH Minh Lâm', khuVuc:'25-02', tinh:'Tây Ninh', cuaHang:[
      { diaChi:'Ấp 2, Xã Lương Hòa, Tỉnh Tây Ninh', sdt:'0868719579', tinh:'Tây Ninh', lat:10.7046301, lng:106.4523662, ganDung:true } ]},
  { ma:'102152', ten:'VLXD Phú Oanh', tenDay:'ĐÀO PHÚ OANH', khuVuc:'25-02', tinh:'Tây Ninh', cuaHang:[
      { diaChi:'K1 Ấp Chợ, Xã Mỹ Yên, Tỉnh Tây Ninh', sdt:'0795552202', tinh:'Tây Ninh', lat:10.6406242, lng:106.528946, ganDung:true } ]},
  { ma:'104848', ten:'Kim Tín Phát', tenDay:'Công ty TNHH TM DV Kim Tín Phát', khuVuc:'25-02', tinh:'Tây Ninh', cuaHang:[
      { diaChi:'280 Quốc lộ 1A, khu phố 9, Xã Bến Lức, Tỉnh Tây Ninh', sdt:'0917774243', tinh:'Tây Ninh', lat:10.6649296, lng:106.4818167, ganDung:true } ]},
  { ma:'107570', ten:'Showroom Phước Hậu', tenDay:'CH Phước Hậu (Showroom Phước Hậu)', khuVuc:'25-02', tinh:'Tây Ninh', cuaHang:[
      { diaChi:'Thửa đất số 38, tờ bản đồ số 28, ấp Chánh, Xã Đức Lập, Tỉnh Tây Ninh', sdt:'0903468345', tinh:'Tây Ninh', lat:10.8996238, lng:106.4759262, ganDung:true } ]},
  { ma:'111897', ten:'Quan Sơn', tenDay:'Công ty TNHH DV ĐT XD Quan Sơn', khuVuc:'25-02', tinh:'Tây Ninh', cuaHang:[
      { diaChi:'Ấp Thành Tây, xã Đông Thành, tỉnh Tây Ninh', sdt:'0394223939', tinh:'Tây Ninh', lat:10.8687648, lng:106.2404468, ganDung:true } ]},
  { ma:'111013', ten:'Lamvu Homes', tenDay:'Công ty TNHH Lamvu Homes', khuVuc:'25-02', tinh:'Tây Ninh', cuaHang:[
      { diaChi:'Thửa đất số 406 tờ bản đồ số 5Ấp Long Hưng, Xã Phước Lý, Tỉnh Tây Ninh', sdt:'0935916978', tinh:'Tây Ninh', lat:10.6361703, lng:106.6114474, ganDung:true } ]},
  { ma:'101621', ten:'Nam Trường Thịnh', tenDay:'CÔNG TY TNHH MTV THƯƠNG MẠI NAM TRƯỜNG THỊNH', khuVuc:'KV25-04', tinh:'Đồng Tháp', cuaHang:[
      { diaChi:'Ấp Cửu Hòa, Xã Châu Thành, Tỉnh Đồng Tháp', sdt:'0913881665', tinh:'Đồng Tháp', lat:10.4337697, lng:106.3287199, ganDung:true } ]},
  { ma:'112551', ten:'Ba Trọng', tenDay:'CÔNG TY TNHH MTV BA TRỌNG', khuVuc:'KV25-03', tinh:'Đồng Tháp', cuaHang:[
      { diaChi:'Số 10, Tổ 17, ấp Mỹ Phú B, xã Hội Cư, tỉnh Đồng Tháp', sdt:'0903360994', tinh:'Đồng Tháp', lat:10.4015299, lng:106.0052437, ganDung:true } ]},
  { ma:'101625', ten:'Minh Tuấn', tenDay:'CÔNG TY TNHH THƯƠNG MẠI XÂY DỰNG MINH TUẤN', khuVuc:'KV25-03', tinh:'Đồng Tháp', cuaHang:[
      { diaChi:'Số 896 Lý Thường Kiệt, Phường Đạo Thạnh, Tỉnh Đồng Tháp', sdt:'0946411415', tinh:'Đồng Tháp', lat:10.3890951, lng:106.3522658, ganDung:true } ]},
  { ma:'101622', ten:'Tiến Công 2', tenDay:'HỘ KINH DOANH TIẾN CÔNG 2', khuVuc:'KV25-04', tinh:'Đồng Tháp', cuaHang:[
      { diaChi:'Ấp Điền Thạnh, Xã Chợ Gạo, Tỉnh Đồng Tháp', sdt:'0918808745', tinh:'Đồng Tháp', lat:10.3579702, lng:106.4288088, ganDung:true } ]},
  { ma:'102009', ten:'Hưng Quốc', tenDay:'Hộ KINH DOANH HƯNG QUỐC', khuVuc:'KV25-04', tinh:'Đồng Tháp', cuaHang:[
      { diaChi:'Số 161 đường Trần Công Tường, khu phố 2, Phường Gò Công, Tỉnh Đồng Tháp', sdt:'0903616271', tinh:'Đồng Tháp', lat:10.3506998, lng:106.6703963, ganDung:true } ]},
  { ma:'102002', ten:'Cao Tiến Gò Công Tây', tenDay:'CÔNG TY TNHH CAO TIẾN GÒ CÔNG TÂY', khuVuc:'KV25-04', tinh:'Đồng Tháp', cuaHang:[
      { diaChi:'Số 789 Huyện Lộ 18 Ấp Lợi An, Xã Đồng Sơn, Tỉnh Đồng Tháp', sdt:'0918603479', tinh:'Đồng Tháp', lat:10.3939517, lng:106.5701927, ganDung:true } ]},
  { ma:'101627', ten:'Vũ Hoàng', tenDay:'CÔNG TY TRÁCH NHIỆM HỮU HẠN MỘT THÀNH VIÊN NỘI THẤT VŨ HOÀNG', khuVuc:'KV25-03', tinh:'Đồng Tháp', cuaHang:[
      { diaChi:'Đường tỉnh 868, Khu 3, Phường Mỹ Phước Tây, Tỉnh Đồng Tháp', sdt:'0909995024', tinh:'Đồng Tháp', lat:10.4665054, lng:106.1169299, ganDung:true } ]},
  { ma:'112983', ten:'Hữu Nhân', tenDay:'HỘ KINH DOANH VẬT LIỆU XÂY DỰNG TTNT HỮU NHÂN', khuVuc:'KV25-03', tinh:'Đồng Tháp', cuaHang:[
      { diaChi:'Tổ 11, khu phố Phú Thuận, phường Cai Lậy, tỉnh Đồng Tháp', sdt:'0988484248', tinh:'Đồng Tháp', lat:10.3993643, lng:106.1196556, ganDung:true } ]},
  { ma:'106250', ten:'VLXD Cẩm Hồng', tenDay:'HỘ KINH DOANH ĐOÀN THỊ CẨM HỒNG', khuVuc:'KV25-04', tinh:'Đồng Tháp', cuaHang:[
      { diaChi:'Số 210A đường Võ Duy Linh, khu phố 4, Phường Gò Công, Tỉnh Đồng Tháp', sdt:'0939387338', tinh:'Đồng Tháp', lat:10.3506998, lng:106.6703963, ganDung:true } ]},
  { ma:'110966', ten:'Minh Thành Gò Công', tenDay:'CÔNG TY TNHH MỘT THÀNH VIÊN MINH THÀNH GÒ CÔNG', khuVuc:'KV25-04', tinh:'Đồng Tháp', cuaHang:[
      { diaChi:'Số 20 Nguyễn Huệ, Khu phố 1, Phường Long Thuận, Tỉnh Đồng Tháp', sdt:'0326084488', tinh:'Đồng Tháp', lat:10.3602893, lng:106.6939803, ganDung:true } ]},
  { ma:'111604', ten:'Hữu Tín', tenDay:'CÔNG TY TNHH TMDV HỮU TÍN', khuVuc:'KV25-04', tinh:'Đồng Tháp', cuaHang:[
      { diaChi:'Ấp Thạnh Hưng, xã Đồng Sơn, tỉnh Đồng Tháp', sdt:'0848218335', tinh:'Đồng Tháp', lat:10.3939517, lng:106.5701927, ganDung:true } ]},
  { ma:'111846', ten:'Kim Hòa', tenDay:'CÔNG TY TNHH THƯƠNG MẠI XÂY DỰNG VÀ DỊCH VỤ KIM HÒA', khuVuc:'KV25-04', tinh:'Đồng Tháp', cuaHang:[
      { diaChi:'Ấp Xóm Đình, xã Gia Thuận, tỉnh Đồng Tháp', sdt:'0915602699', tinh:'Đồng Tháp', lat:10.4056161, lng:106.7588494, ganDung:true } ]},
  { ma:'112420', ten:'Nhật Khanh', tenDay:'HỘ KINH DOANH TRANG TRÍ NỘI THẤT NHẬT KHANH', khuVuc:'KV25-03', tinh:'Đồng Tháp', cuaHang:[
      { diaChi:'Số 26/04 đường huyện 53, khu phố Mỹ Thuận, phường Nhị Quý, tỉnh Đồng Tháp', sdt:'0939399034', tinh:'Đồng Tháp', lat:10.3879716, lng:106.1639749, ganDung:true } ]},
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
