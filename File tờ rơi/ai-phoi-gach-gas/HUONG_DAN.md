# Cài "Phối gạch bằng AI" (làm 1 lần, khoảng 10 phút)

Khách chụp phòng trên web → script này gọi Gemini bằng khoá của anh → trả ảnh phối. Khoá không lộ ra ngoài vì nằm trong Apps Script.

## 1. Lấy khoá Gemini
1. Vào https://aistudio.google.com/apikey (đăng nhập Gmail của anh).
2. Bấm **Create API key** → chép khoá. **Đừng gửi khoá trong chat hay đưa lên GitHub.**
3. Để chủ động chi phí: trong Google Cloud (project của khoá) → Billing → **Budgets & alerts**, đặt ngân sách tháng (ví dụ 300.000đ) và cảnh báo email.

## 2. Tạo Apps Script
1. Vào https://script.google.com → **Dự án mới** → đặt tên "Phoi gach AI".
2. Xoá nội dung mặc định, dán toàn bộ file `Code.gs` trong thư mục này.
3. Bên trái chọn **Project Settings (bánh răng)** → **Script properties** → thêm:
   - `GEMINI_KEY` = khoá vừa lấy (bắt buộc)
   - `LUOT_NGAY` = 3 (số ảnh mỗi khách mỗi ngày, tuỳ chọn)
   - `TRAN_NGAY` = 150 (tổng ảnh mỗi ngày của cả web, tuỳ chọn, đây là trần chi phí)
4. Trở lại trình soạn thảo, chọn hàm `lietKeModel` → **Run** → cấp quyền → xem **Execution log**: có tên mô hình ảnh nào thì đặt vào thuộc tính `GEMINI_MODEL` (nếu mặc định đã chạy được thì khỏi).

## 3. Đưa lên (Deploy)
1. **Deploy → New deployment → Web app**.
2. Execute as: **Me**. Who has access: **Anyone**.
3. Bấm Deploy, chép **Web app URL** (dạng https://script.google.com/macros/s/.../exec).
4. Gửi URL đó cho Claude (URL không phải bí mật như khoá, nhưng đừng đăng công khai rộng rãi), hoặc tự dán vào file `ai-config.js` của web: `var AI_API='URL';`

## Kiểm tra
Mở URL + `?x=1` trên trình duyệt: thấy `{"ok":true,"dich_vu":"phoi-gach-ai","con":150}` là chạy.

## Chi phí và an toàn
- Mỗi ảnh tốn khoảng 0,07–0,13 USD (khoảng 1.700–3.400đ) theo bảng giá Google lúc kiểm tra tháng 11/2026, nên xem lại ở https://ai.google.dev/gemini-api/docs/pricing.
- Tối đa/ngày = `TRAN_NGAY` ảnh → chi phí tối đa/ngày bằng số đó nhân giá ảnh. Chạm trần thì web tự báo "Gửi ảnh phòng cho đại lý".
- Lỗi AI không tạo được ảnh thì không trừ lượt của khách.
- Script chỉ lấy mặt gạch từ `https://lechilinhwork-lgtm.github.io/anh/face/`.
- Muốn dừng khẩn cấp: Deploy → Manage deployments → Archive, hoặc xoá thuộc tính `GEMINI_KEY`.
