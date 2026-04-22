# PHẦN A - KIỂM TRA ĐỌC HIỂU

## Câu A1: (nguồn tham chiếu:`07_forms_interactive.md`)
Liệt kê 10 input types khác nhau:
1. type="text" → Ô nhập chữ thông thường, tự validate qua minlength/maxlength → Dùng nhập Họ tên/Địa chỉ.

2. type="email" → Ô nhập text, tự kiểm tra định dạng có ký tự @ → Dùng cho Form đăng ký/đăng nhập.

3. type="password" → Ô nhập ẩn ký tự (hiện dấu chấm), bảo mật thông tin → Dùng nhập Mật khẩu.

4. type="number" → Ô nhập số có nút tăng/giảm, tự kiểm tra min/max → Dùng chọn Số lượng sản phẩm.

5. type="tel" → Ô nhập text, tự mở bàn phím số trên điện thoại (UX) → Dùng nhập Số điện thoại.

6. type="date" → Ô chọn ngày từ lịch (Calendar), tự kiểm tra khoảng ngày → Dùng chọn Ngày nhận hàng.

7. type="file" → Nút chọn tệp từ máy tính, tự lọc đuôi file qua accept → Dùng Gửi ảnh sản phẩm lỗi.

8. type="checkbox" → Ô tích chọn vuông, cho phép chọn nhiều mục cùng lúc → Dùng Đồng ý điều khoản.

9. type="radio" → Nút chọn tròn, chỉ được chọn 1 mục duy nhất trong nhóm → Dùng chọn Phương thức thanh toán.

10. type="range" → Thanh trượt chọn giá trị trong khoảng định sẵn → Dùng làm Bộ lọc khoảng giá.

## Câu A2: (nguồn tham chiếu:`07_forms_interactive.md`)
Trường hợp 1: `<input type="text" required value="">`

- Dự đoán: Trình duyệt hiện thông báo: "Vui lòng điền vào trường này."

- Tại sao: Thuộc tính required đánh dấu đây là trường bắt buộc. Khi giá trị (value) trống, trình duyệt sẽ ngăn không cho gửi form.

Trường hợp 2: `<input type="email" value="abc">`

- Dự đoán: Trình duyệt hiện thông báo: "Vui lòng bao gồm một dấu '@' trong địa chỉ email. 'abc' còn thiếu một dấu '@'."

- Tại sao: type="email" yêu cầu dữ liệu phải tuân thủ định dạng email. Chuỗi "abc" vi phạm quy tắc này vì không có ký tự @.

Trường hợp 3: `<input type="number" min="1" max="10" value="15">`

- Dự đoán: Trình duyệt hiện thông báo: "Giá trị phải nhỏ hơn hoặc bằng 10."

- Tại sao: Thuộc tính max="10" thiết lập giới hạn trên cho con số được nhập. Giá trị 15 vượt quá giới hạn này nên không hợp lệ.

Trường hợp 4: `<input type="text" pattern="[0-9]{10}" value="abc123">`

- Dự đoán: Trình duyệt hiện thông báo: "Vui lòng khớp với định dạng được yêu cầu."

- Tại sao: pattern="[0-9]{10}" là một biểu thức chính quy yêu cầu đúng 10 chữ số (từ 0-9). Chuỗi "abc123" chứa ký tự chữ và sai độ dài nên bị chặn.

Trường hợp 5: `<input type="password" minlength="8" value="123">`

- Dự đoán: Trình duyệt hiện thông báo: "Vui lòng kéo dài văn bản này thành 8 ký tự trở lên (hiện bạn đang sử dụng 3 ký tự)."

- Tại sao: minlength="8" quy định số lượng ký tự tối thiểu phải nhập. Vì "123" chỉ có 3 ký tự, nó chưa đủ độ dài an toàn theo thiết lập.