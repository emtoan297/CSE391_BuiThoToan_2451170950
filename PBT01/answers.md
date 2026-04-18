



## PHẦN A - KIỂM TRA ĐỌC HIỂU

## Câu A1 (Nguồn tham chiếu: 01_introduction_html_universe.md 1.1 Kiến trúc Client-Server, 1.2 HTTP, 1.3 Browser Rendering và 4.3 Developer Tools)

1. 5 bước xảy ra khi nhập https://shopee.vn và nhấn Enter:
    - 1. Gửi Request (Yêu cầu): Trình duyệt (Client) gửi yêu cầu đi qua router, nhà mạng, xuyên cáp quang để đến máy chủ (Server) của Shopee.
    - 2. DNS Lookup (Tra cứu): Hệ thống tìm kiếm địa chỉ IP tương ứng với tên miền shopee.vn.
    - 3. Server xử lý: Máy chủ nhận yêu cầu, xử lý logic (ví dụ: lấy dữ liệu sản phẩm, kiểm tra đăng nhập).
    - 4. Trả về Response (Phản hồi): Máy chủ gửi ngược dữ liệu (file HTML, CSS, JS) về cho trình duyệt.
    - 5. Browser Rendering (Kết xuất): Trình duyệt nhận file, đọc bản vẽ (HTML), thiết kế nội thất (CSS), lắp hệ thống điện nước (JS) để hiện ra giao diện Shopee.

2. Trong DevTools của Chrome:
    - Tab Network cho thấy thông tin cho phép người dùng xem các Requests/Responses (yêu cầu và phản hồi). Cụ thể là kiểm tra xem website tải nhanh hay chậm và file nào đang chiếm dung lượng nặng nhất.
    - Screenshots file `A1.2.png`.



## Câu A2 (Nguồn tham chiếu: 04_visible_part_html.md - Bản đồ Semantic Elements)

Trang web này bị Google đánh giá SEO thấp vì lạm dụng quá nhiều thẻ <div> (lỗi "Div Soup"). Các thẻ này không mang ý nghĩa nội dung, khiến công cụ tìm kiếm không thể xác định được đâu là phần quan trọng nhất hay cấu trúc chính của trang.

4 lỗi ngữ nghĩa:
1. Đầu trang: Thay <div class="header"> bằng thẻ <header> để xác định phần chứa logo và điều hướng. 
2. Thanh menu: Thay <div class="menu"> bằng thẻ <nav> để thông báo đây là khu vực điều hướng chính. 
3. Nội dung chính: Thay <div class="main"> bằng thẻ <main> để đánh dấu nội dung độc nhất của trang. 
4. Phần tử sản phẩm: Thay <div class="product"> bằng thẻ <article> vì đây là một nội dung độc lập. Ngoài ra, nên đổi thẻ <div class="title"> thành thẻ <h1> để nhấn mạnh tên sản phẩm cho SEO. 

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