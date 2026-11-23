# Web công việc – Tờ rơi gạch Đồng Tâm

Bản web của tờ rơi A4 gấp 3 (2 mặt) giới thiệu gạch, ngói, keo Đồng Tâm và 18 đại lý hợp tác.

- **Xem trên điện thoại:** các cột xếp thành 1 cột, bìa lên đầu.
- **In:** bấm "In tờ rơi" (hoặc Ctrl+P), khổ A4 ngang, 2 trang, bật "Đồ hoạ nền".
- **Mã đại lý:** thêm `?dl=<mã>` vào địa chỉ, ví dụ `index.html?dl=101290`. Mã QR và các nút sẽ trỏ tới `https://lechilinhwork-lgtm.github.io/?dl=<mã>`, giống các bản PDF riêng từng đại lý.

## Cấu trúc

| Đường dẫn | Nội dung |
|---|---|
| `index.html` | Trang tờ rơi (HTML + CSS, mã QR tạo bằng thư viện `qrcode-generator`) |
| `assets/img/` | Ảnh tách từ bản PDF, đã nén cho web |
| `File tờ rơi/Bản mới 2026-11/` | Bản PDF gốc: bản chung và bản cho đại lý 101290, 110198 |
| `File tờ rơi/ai-phoi-gach-gas/` | Mã Google Apps Script "Phối gạch bằng AI" và hướng dẫn cài |

Thư mục `File tờ rơi/Fonts/` (font UTM, Myriad Pro) không đưa lên vì là font có bản quyền. Trang web dùng font Be Vietnam Pro của Google Fonts.

## Bật GitHub Pages

Settings → Pages → Source: *Deploy from a branch* → Branch `main`, thư mục `/ (root)` → Save. Vài phút sau trang có ở `https://chauganbarimasu9-cmyk.github.io/Web_cong_viec-/`.

## Lưu ý bảo mật

Khoá Gemini chỉ đặt trong *Script properties* của Apps Script, không bao giờ ghi vào mã hay đưa lên repo này.
