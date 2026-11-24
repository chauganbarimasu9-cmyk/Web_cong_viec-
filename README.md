# Web công việc – Gạch, ngói, keo Đồng Tâm

Web cho khách chọn gạch Đồng Tâm theo ngân sách, kèm tờ rơi A4 gấp 3 có mã QR dẫn về web.

| Trang | Việc |
|---|---|
| `index.html` | Web khách: chọn gạch theo phòng, diện tích, mức đầu tư (giá lẻ niêm yết lấy trực tiếp từ máy chủ SalesTool), ngói, keo, chà ron, đại lý gần bạn, nhắn Zalo đại lý. Thêm `?dl=<mã đại lý>` để gắn đại lý. |
| `to-roi.html` | Tờ rơi A4 ngang để in. Chọn đại lý ở thanh trên cùng để ra tờ riêng + QR riêng, rồi bấm "In / Lưu PDF". |
| `to-roi-web.html` | Bản tờ rơi xem trên điện thoại (dựng lại từ bản PDF). |
| `dai-ly.js` | 27 đại lý hợp tác khu vực 25-05, 25-06 (Đồng Tháp): tên cửa hàng, địa chỉ, 1 số Zalo, toạ độ (đa số theo trung tâm xã/phường). Lấy từ file Excel BM01, file Excel không đưa lên repo. Sửa ở đây là cả web và tờ rơi cùng đổi. |
| `assets/img/` | Ảnh dùng trên web và tờ rơi. |
| `tai-lieu/` | Brochure Đồng Tâm 3 (ảnh 2 mặt) để tham khảo. |
| `File tờ rơi/` | Bản PDF tờ rơi đã in và mã Apps Script "Phối gạch bằng AI". |

## In tờ rơi
Mở `to-roi.html`, chọn đại lý (hoặc "Chung"), in khổ A4, hướng ngang, lề "Không", bật "Đồ hoạ nền", in 2 mặt lật theo cạnh ngắn. Quét thử QR trước khi in cả lô.

## Bật GitHub Pages
Settings → Pages → Source: *Deploy from a branch* → Branch `main`, thư mục `/ (root)` → Save. Trang chạy ở `https://chauganbarimasu9-cmyk.github.io/Web_cong_viec-/`. Mã QR trên tờ rơi trỏ về địa chỉ này nên cần bật Pages trước khi in.

## Quy tắc nội dung
- Kháng khuẩn chỉ nói theo 3 phiếu Viện Pasteur TP.HCM 06/06/2025 (ISO 22196:2011): diệt khoảng 87–92% sau 24 giờ. Không dùng "99%".
- Không đưa giá sale/giá đại lý lên web và tờ rơi.
- Khoá Gemini chỉ đặt trong *Script properties* của Apps Script, không ghi vào mã hay repo.

Thư mục `Mau/` (dữ liệu gốc, file thiết kế .ai, slide nội bộ, font bản quyền) chỉ để trên máy, không đưa lên repo.
