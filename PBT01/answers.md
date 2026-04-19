



## PHẦN A - KIỂM TRA ĐỌC HIỂU

## Câu A1 (Nguồn tham chiếu: 01_introduction_html_universe.md 1.1 Kiến trúc Client-Server, 1.2 HTTP, 1.3 Browser Rendering và 4.3 Developer Tools)

1. 5 bước xảy ra khi nhập https://shopee.vn và nhấn Enter:
    -  Gửi Request (Yêu cầu): Trình duyệt (Client) gửi yêu cầu đi qua router, nhà mạng, xuyên cáp quang để đến máy chủ  (Server) của Shopee.
    -  DNS Lookup (Tra cứu): Hệ thống tìm kiếm địa chỉ IP tương ứng với tên miền shopee.vn.
    -  Server xử lý: Máy chủ nhận yêu cầu, xử lý logic (ví dụ: lấy dữ liệu sản phẩm, kiểm tra đăng nhập).
    -  Trả về Response (Phản hồi): Máy chủ gửi ngược dữ liệu (file HTML, CSS, JS) về cho trình duyệt.
    -  Browser Rendering (Kết xuất): Trình duyệt nhận file, đọc bản vẽ (HTML), thiết kế nội thất (CSS), lắp hệ thống điện nước (JS) để hiện ra giao diện Shopee.

2. Trong DevTools của Chrome:
    - Tab Network cho thấy thông tin cho phép người dùng xem các Requests/Responses (yêu cầu và phản hồi). Cụ thể là kiểm tra xem website tải nhanh hay chậm và file nào đang chiếm dung lượng nặng nhất.
    - Screenshots file `A1.2.png`.



## Câu A2 (Nguồn tham chiếu: 04_visible_part_html.md - Bản đồ Semantic Elements)

Trang web này bị Google đánh giá SEO thấp vì lạm dụng quá nhiều thẻ `<div>` (lỗi "Div Soup"). Các thẻ này không mang ý nghĩa nội dung, khiến công cụ tìm kiếm không thể xác định được đâu là phần quan trọng nhất hay cấu trúc chính của trang.

4 lỗi ngữ nghĩa:
1. Đầu trang: Thay `<div class="header">` bằng thẻ `<header>` để xác định phần chứa logo và điều hướng. 
2. Thanh menu: Thay `<div class="menu">` bằng thẻ `<nav>` để thông báo đây là khu vực điều hướng chính. 
3. Nội dung chính: Thay `<div class="main">` bằng thẻ `<main>` để đánh dấu nội dung độc nhất của trang. 
4. Phần tử sản phẩm: Thay `<div class="product">` bằng thẻ `<article>` vì đây là một nội dung độc lập. Ngoài ra, nên đổi thẻ `<div class="title">` thành thẻ `<h1>` để nhấn mạnh tên sản phẩm cho SEO.

Code sửa lại:
```html
<header>
    <div class="logo">ShopTLU</div>
    <nav>
        <a href="/">Trang chủ</a>
        <a href="/products">Sản phẩm</a>
    </nav>
</header>
<main>
    <article>
        <h1>iPhone 16 Pro</h1>
        <p>25.990.000đ</p>
        <figure>
            <img src="iphone.jpg" alt="iPhone 16 Pro">
        </figure>
    </article>
</main>
<footer>© 2026 ShopTLU</footer>
```


## Câu A3: (Nguồn tham chiếu: 04_visible_part_html.md)
Kết quả là:
```html
[Hộp 1]
Text A Text B
[Hộp 2]
Text C Text D
[Hộp 3]
```
-`<div>` là 1 thẻ thuộc Block element luôn bắt đầu trên một dòng mới và chiếm toàn bộ chiều ngang của trang. Do đó, Hộp 1, Hộp 2, và Hộp 3 mỗi cái nằm riêng biệt trên một dòng.
-`<span>` và `<strong>` là 2 thẻ thuộc Inline element nên chúng sẽ nằm cùng một hàng với nhau khi kết thúc.

## Câu A4: (Nguồn tham chiếu: 05_tables_hyperlinks.md )
- `<thead>` Chứa các hàng tiêu đề , xác định tên gọi hoặc ý nghĩa cho các cột bên dưới nằm ở phần đầu.
- `<tbody>` Chứa nội dung dữ liệu chính của bảng. Đây là phần hiển thị các bản ghi chi tiết nằm ở phần giữa.
- `<tfoot>` Chứa các thông tin tổng kết, thống kê nằm ở cuối bảng.

**Lý do không dùng bảng để tạo bố cục trang web:**

- Bảng có cấu trúc cứng nhắc, rất khó để tự động co giãn hoặc nhảy dòng linh hoạt trên màn hình điện thoại so với CSS Grid/Flexbox.
- Thẻ `<table>` chỉ dành cho dữ liệu bảng (so sánh, thống kê). Dùng làm layout khiến Google Bot không hiểu được cấu trúc nội dung.
- Tốc độ load sẽ chậm vì trình duyệt phải đọc xong toàn bộ mã nguồn của thẻ bảng mới có thể tính toán và hiển thị giao diện

# PHẦN B - THỰC HÀNH CODE:

## Câu B3:
Danh sách các lỗi:
Lỗi 1: Dòng 1 — Khai báo DOCTYPE thiếu từ khóa html — Cách sửa: Đổi thành <!DOCTYPE html>
Lỗi 2: Dòng 2 — Thẻ <html> thiếu thuộc tính ngôn ngữ lang — Cách sửa: Đổi thành <html lang="vi">
Lỗi 3: Dòng 4 — Thẻ <title> chưa được đóng — Cách sửa: Đổi thành <title>Trang web</title>
Lỗi 4: Dòng 5 — Giá trị bảng mã utf8 thiếu dấu gạch ngang và viết sai chuẩn — Cách sửa: Đổi thành <meta charset="UTF-8">
Lỗi 5: Dòng 8 — Thẻ đóng của <h1> viết sai (thiếu dấu gạch chéo đúng vị trí) — Cách sửa: Đổi thành <h1>Welcome to ShopTLU</h1>
Lỗi 6: Dòng 12 — Thẻ đóng của <a> viết sai — Cách sửa: Đổi thành <a href="home">Trang chủ</a>
Lỗi 7: Dòng 21 — Giá trị của thuộc tính src không nằm trong dấu ngoặc kép — Cách sửa: Đổi thành <img src="iphone.jpg">
Lỗi 8: Dòng 21 — Thẻ <img> thiếu thuộc tính alt mô tả ảnh (lỗi Semantic) — Cách sửa: Thêm alt="iPhone 16 Pro" vào thẻ img.
Lỗi 9: Dòng 23 — Các thẻ đóng </p></b> bị viết sai thứ tự lồng nhau — Cách sửa: Đổi thành <b>25.990.000đ</b></p>
Lỗi 10: Dòng 40 — Sử dụng thẻ <main> lần thứ hai (Thẻ <main> là duy nhất trong một trang) — Cách sửa: Đổi thẻ <main> này thành <aside> nếu là nội dung phụ.
Lỗi 11: Dòng 44 — Thẻ <footer> chưa được đóng — Cách sửa: Thêm thẻ </footer> vào cuối đoạn nội dung chân trang.




