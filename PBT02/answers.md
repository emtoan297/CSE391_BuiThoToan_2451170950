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

## Câu A3: (nguồn tham chiếu: Accessibility trong chương 07 )
1. Tại sao `<label for="email">` quan trọng cho người dùng Screen Reader?
- Kết nối dữ liệu: Screen reader (trình đọc màn hình) dựa vào thuộc tính for của `<label>` và id của `<input>` để biết chúng là một cặp.

- Thông báo ngữ cảnh: Khi người dùng khiếm thị dùng phím Tab để di chuyển vào ô nhập liệu, screen reader sẽ đọc to nội dung bên trong thẻ label (ví dụ: "Email, edit text").
2. Khi nào dùng `<fieldset>` + `<legend>`? Cho ví dụ cụ thể.
- Dùng để nhóm các ô nhập liệu có liên quan mật thiết với nhau về mặt ý nghĩa, giúp người dùng dễ hình dung cấu trúc form.

- Tác dụng: `<fieldset>` tạo một khung bao quanh nhóm, còn `<legend>` đóng vai trò là tiêu đề của cái khung đó.

- Ví dụ cụ thể: Khi bạn có một nhóm các lựa chọn Radio buttons hoặc một nhóm thông tin địa chỉ.

```html
<fieldset>
    <legend>Thông tin giao hàng</legend>
    <label for="street">Đường:</label>
    <input type="text" id="street" name="street">
</fieldset>
```
3. aria-label dùng khi nào? Tại sao KHÔNG nên dùng khi đã có `<label>`?
- Dùng khi giao diện không thể hiển thị văn bản nhãn và muốn nút đó có hình ảnh,aria-label sẽ giúp máy đọc hiểu được chức năng của nút.
- Gây nhiễu: Khi có cả hai, trình đọc màn hình có thể bị "bối rối" hoặc đọc lặp lại thông tin không cần thiết.

## Câu A4: (nguồn tham chiếu:`06_graphics_multimedia.md`)
1. Thuộc tính loading="lazy" trên thẻ `<img>`

**Giải thích:** 
- Đây là kỹ thuật "tải chậm". Thông thường, trình duyệt sẽ tải tất cả ảnh ngay khi mở trang web. Với loading="lazy", trình duyệt sẽ trì hoãn việc tải ảnh cho đến khi người dùng cuộn chuột gần tới vị trí của tấm ảnh đó.

**Cải thiện:**

- Tốc độ tải trang đầu (Initial Load): Trang web hiện lên nhanh hơn vì không phải tải hàng chục tấm ảnh ở tuốt phía dưới cùng một lúc.

- Tiết kiệm băng thông: Nếu người dùng chỉ xem đầu trang rồi thoát, trình duyệt sẽ không tốn dữ liệu để tải những ảnh ở dưới.

**Khi nào KHÔNG nên dùng?**

- Ảnh "Above the fold": Đó là những ảnh nằm ở phần đầu trang (người dùng thấy ngay khi vừa mở web) như: Logo, ảnh Banner chính (Hero image).

- Lý do: Nếu dùng lazy load cho những ảnh này, chúng sẽ bị hiện ra chậm hơn, làm người dùng thấy một khoảng trắng trong chốc lát (giảm điểm LCP - Largest Contentful Paint).

## Câu A5: (nguồn tham chiếu:`06_graphics_multimedia.md`)
1. Cách 1: Chỉ dùng thẻ `<img>`
- Đặc điểm: Đây là cách dùng ảnh đơn thuần. Nó chỉ nhúng một tệp hình ảnh vào trang web mà không có bất kỳ giải thích hay chú thích đi kèm nào hiển thị trên màn hình.

- Khi nào dùng: Dùng cho các hình ảnh đóng vai trò là một phần của nội dung hoặc trang trí, không cần có chú thích văn bản bên dưới để giải thích ý nghĩa.

- Ví dụ thực tế: Ảnh Avatar người dùng trong phần profile, ảnh đại diện chỉ cần hiển thị, tên người dùng đã có thẻ `<h2>` hoặc `<span>` riêng bên cạnh, không cần chú thích "Đây là ảnh đại diện".

2. Cách 2: Dùng `<figure>` kết hợp `<figcaption>`
- Đặc điểm: Đây là cách dùng ảnh theo cụm nội dung. Thẻ `<figure>` bao bọc ảnh, và `<figcaption>` cung cấp một chú thích hiển thị rõ ràng cho bức ảnh đó.

- Khi nào dùng: Dùng khi hình ảnh là một đơn vị nội dung độc lập (như minh họa, sơ đồ, ảnh sản phẩm) mà nếu nhấc cả cụm này đặt sang chỗ khác trong bài viết, nội dung chính vẫn không bị ảnh hưởng. Nó giúp người dùng (và Google) hiểu rõ mối liên hệ giữa ảnh và dòng chú thích đi kèm.

- Ví dụ thực tế: Ảnh sản phẩm đi kèm với tên và giá ngay bên dưới. Việc dùng `<figure>` giúp nhóm chúng lại thành một khối thống nhất.
```html
<figure>
    <img src="product.jpg" alt="iPhone 16 Pro Max 256GB Titan">
    <figcaption>iPhone 16 Pro Max — 25.990.000đ</figcaption>
</figure>
```

# PHẦN B - THỰC HÀNH CODE

## Bài B1: Giải thích trong answers.md tại sao HTML không thể validate confirm password
- HTML chỉ kiểm tra từng ô độc lập: Các thuộc tính như required, pattern, hay minlength chỉ kiểm tra nội dung bên trong chính ô input đó có hợp lệ với quy tắc đặt ra hay không.
- Thiếu logic so sánh: HTML không có khả năng "nhìn" sang ô input khác để so sánh giá trị. Việc kiểm tra xem ô "Xác nhận mật khẩu" có khớp 100% với ô "Mật khẩu" hay không đòi hỏi một phép toán logic .
- Giải pháp: Để thực hiện việc này, chúng ta bắt buộc phải dùng JavaScript (để so sánh giá trị khi người dùng gõ) hoặc kiểm tra ở phía Server (Backend) sau khi form được gửi đi.
# PHẦN C — PHÂN TÍCH & SUY LUẬN 
## Câu C1:
```
Lỗi 1: Dòng 2 — Input "Tên" không có <label>, id, name và required
Sửa: <label for="name">Tên:</label> <input type="text" id="name" name="name" required>

Lỗi 2: Dòng 4 — Input email không có <label>, id, name và required
Sửa: <label for="email">Email:</label> <input type="email" id="email" name="email" required>

Lỗi 3: Dòng 6 — Input password (mật khẩu) không có <label>, id, name và required
Sửa: <label for="password">Mật khẩu:</label> <input type="password" id="password" name="password" required>

Lỗi 4: Dòng 7 — Input password (nhập lại) không có <label>, id, name và required
Sửa: <label for="confirm_password">Nhập lại mật khẩu:</label> <input type="password" id="confirm_password" name="confirm_password" required>

Lỗi 5: Dòng 9 — Input phone không có <label>, type="tel", id, name
Sửa: <label for="phone">Phone:</label> <input type="tel" id="phone" name="phone" value="0901234567">

Lỗi 6: Dòng 11-14 — Select không có <label>, id, name
Sửa: <label for="city">Thành phố:</label> <select id="city" name="city">...

Lỗi 7: Dòng 16-18 — Label không có checkbox input, không liên kết
Sửa: <label><input type="checkbox" id="agree" name="agree" required> Tôi đồng ý điều khoản</label>
```

## Câu C2:
**Form đăng ký cho ngân hàng số:**
```html
<form>
    <h2>Đăng Ký Tài Khoản Ngân Hàng Số</h2>

    
    <label for="cmnd">CMND/CCCD (12 chữ số):</label><br>
    <input type="text" id="cmnd" name="cmnd" pattern="[0-9]{12}" placeholder="Nhập 12 chữ số" required>
    <br><br>

    
    <label for="account">Số Tài Khoản (10-15 chữ số):</label><br>
    <input type="text" id="account" name="account" pattern="[0-9]{10,15}" placeholder="Nhập 10-15 chữ số" required>
    <br><br>

    <label for="email">Email:</label><br>
    <input type="email" id="email" name="email" placeholder="Nhập email của bạn" required>
    <br><br>

    <label for="pin">PIN (6 chữ số):</label><br>
    <input type="password" id="pin" name="pin" pattern="[0-9]{6}" placeholder="Nhập 6 chữ số" required>
    <br><br>

    <button type="submit">Đăng Ký</button>
    <button type="reset">Xóa</button>
</form>
```
**Câu hỏi**
1. Viết pattern regex cho CMND/CCCD và Số tài khoản:

- **CMND/CCCD** (đúng 12 chữ số):
  ```html
  <input type="text" pattern="[0-9]{12}" placeholder="Nhập 12 chữ số">
- **Số tài khoản** (đúng 10-15 chữ số):
```html
  <input type="text" pattern="[0-9]{10,15}" placeholder="Nhập 10-15 chữ số">
  ```

2. HTML5 validation có đủ an toàn cho ứng dụng ngân hàng không? Tại sao?
- KHÔNG đủ an toàn! Lý do:
- HTML5 validation chỉ kiểm tra định dạng dữ liệu (format), không kiểm tra logic nghiệp vụ (business logic)
- Ví dụ: Pattern [0-9]{12} chỉ kiểm tra "12 chữ số", nhưng không kiểm tra CMND có thật hay không
- Người dùng có thể vô hiệu hóa HTML5 validation bằng DevTools → gửi dữ liệu sai lên server
- Ngân hàng phải validate bắt buộc ở Backend để đảm bảo an toàn

3. Liệt kê 3 loại validation mà HTML5 KHÔNG THỂ làm được (phải dùng JavaScript):

- Validation 1: So sánh giữa 2 ô input

    - Ví dụ: Kiểm tra "Mật khẩu" và "Nhập lại mật khẩu" có khớp không?
    - HTML5 không thể → Phải dùng JavaScript để so sánh giá trị
- Validation 2: Kiểm tra logic nghiệp vụ (Business Logic)

    - Ví dụ: Kiểm tra CMND có hợp lệ theo thuật toán checksum, hoặc CMND chưa bị khóa
    - HTML5 chỉ kiểm tra format → Phải dùng JavaScript gọi API backend
- Validation 3: Kiểm tra dữ liệu trùng lặp (Duplicate Check)

    - Ví dụ: Kiểm tra email/số tài khoản có bị trùng trong database không?
    - HTML5 không có quyền truy cập database → Phải dùng JavaScript/AJAX để gửi lên server
4. Nêu 2 rủi ro bảo mật nếu chỉ validate Frontend mà không validate Backend:
- Dữ liệu rác/độc hại làm hỏng Database: Kẻ tấn công có thể dùng các công cụ như Postman để gửi thẳng dữ liệu "xấu" (ví dụ: chứa mã độc SQL Injection) lên Server mà không cần qua giao diện Web. Nếu Backend không kiểm tra lại, hệ thống có thể bị sập hoặc lộ dữ liệu.

- Gian lận và sai lệch logic nghiệp vụ: Nếu chỉ kiểm tra số tiền rút ở Frontend, một lập trình viên có thể sửa code F12 để gửi yêu cầu rút 1 tỷ đồng dù trong tài khoản chỉ có 1 triệu. Nếu Backend không xác thực lại quyền hạn và số dư, ngân hàng sẽ bị thất thoát tài sản.


