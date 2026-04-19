



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

Lỗi 1: Dòng 1 — Khai báo DOCTYPE thiếu từ khóa html — Cách sửa: Đổi thành `<!DOCTYPE html>`

Lỗi 2: Dòng 2 — Thẻ `<html>` thiếu thuộc tính ngôn ngữ lang — Cách sửa: Đổi thành `<html lang="vi">`

Lỗi 3: Dòng 4 — Thẻ `<title>` chưa được đóng — Cách sửa: Đổi thành `<title>`Trang web`</title>`

Lỗi 4: Dòng 5 — Giá trị bảng mã utf8 thiếu dấu gạch ngang và viết sai chuẩn — Cách sửa: Đổi thành `<meta charset="UTF-8">`

Lỗi 5: Dòng 8 — Thẻ đóng của `<h1>` viết sai (thiếu dấu gạch chéo đúng vị trí) — Cách sửa: Đổi thành `<h1>`Welcome to ShopTLU`</h1>`

Lỗi 6: Dòng 12 — Thẻ đóng của `<a>` viết sai — Cách sửa: Đổi thành `<a href="home">Trang chủ</a>`

Lỗi 7: Dòng 21 — Giá trị của thuộc tính src không nằm trong dấu ngoặc kép — Cách sửa: Đổi thành `<img src="iphone.jpg">`

Lỗi 8: Dòng 21 — Thẻ `<img>`thiếu thuộc tính alt mô tả ảnh (lỗi Semantic) — Cách sửa: Thêm alt="iPhone 16 Pro" vào thẻ img.

Lỗi 9: Dòng 23 — Các thẻ đóng `</p>``</b>` bị viết sai thứ tự lồng nhau — Cách sửa: Đổi thành `<b>`25.990.000đ`</b>``</p>`

Lỗi 10: Dòng 40 — Sử dụng thẻ `<main>` lần thứ hai (Thẻ `<main>` là duy nhất trong một trang) — Cách sửa: Đổi thẻ `<main>`này thành `<aside>` nếu là nội dung phụ.

Lỗi 11: Dòng 44 — Thẻ `<footer>` chưa được đóng — Cách sửa: Thêm thẻ `</footer>` vào cuối đoạn nội dung chân trang.

## Câu B4:
1. Với trang shopee.vn:  
* 3 thẻ semantic HTML5 được sử dụng:
- Thẻ `<html>` Nằm ngay dòng đầu tiên (thẻ gốc có thuộc tính dir="ltr" lang="vi").
- Thẻ `<head>` Nằm ngay bên dưới thẻ `<html>`(chứa các thông tin metadata của như tiêu đề, bảng mã, liên kết CSS).
- Thẻ `<body>` Nằm dưới thẻ `<head>`(thẻ ngữ nghĩa bao bọc toàn bộ nội dung hiển thị của trang web mà người dùng nhìn thấy).
* 2 thẻ mà trang đó KHÔNG dùng đúng semantic:
- Thẻ `<div id="main">` Nên dùng thẻ `<main>` thay vì `<div id="main">` vì đây là nội dung chính của trang.
- Thẻ `<div id="modal">` - Nên dùng thẻ `<dialog>` thay vì `<div id="modal">` vì đây là hộp thoại/modal.
2. Trong tab Elements shopee không có `<table>` nào.
3. `<form>` trên trang 
- From đó có Action: /search và Method: get  
- Input text và Input button được sử dụng

# PHẦN C — SUY LUẬN

## Câu C1:
```html
<!DOCTYPE html>
<html lang="vi">
<head> <!-- head chứa thông tin cấu hình trang -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Trang Chi Tiết Sản Phẩm</title>
</head>
<body> <!-- body chứa toàn bộ nội dung hiển thị -->

    <header><!-- header dùng cho phần đầu trang -->
        <h1>Logo Shop</h1> <!-- h1 là tiêu đề chính của website -->
        
        <nav> <!-- nav vì đây là điều hướng -->
            <ul> <!-- ul vì danh sách menu không cần thứ tự -->
                <li><a href="#">Trang chủ</a></li>
                <li><a href="#">Sản phẩm</a></li>
            </ul>
        </nav>
    </header>

    <nav aria-label="breadcrumb">
        <ol> <!-- ol vì breadcrumb có thứ tự -->
            <li><a href="#">Trang chủ</a></li>
            <li><a href="#">Điện thoại</a></li>
            <li>iPhone 16</li> <!-- mục hiện tại không cần link -->
        </ol>
    </nav>

    <main> <!-- main chứa nội dung chính của trang -->
        
        <section id="product-intro"> <!-- section vì đây là 1 khối nội dung riêng -->
            
            <figure> <!-- figure dùng để chứa hình ảnh có liên quan -->
                <img src="anh1.jpg" alt="Ảnh chính"> <!-- img để hiển thị ảnh -->
                <img src="anh2.jpg" alt="Ảnh góc cạnh">
                <img src="anh3.jpg" alt="Ảnh mặt sau">
                <img src="anh4.jpg" alt="Ảnh hộp">
                <img src="anh5.jpg" alt="Ảnh cầm trên tay">
            </figure>

            <article> <!-- article vì thông tin sản phẩm là nội dung độc lập -->
                <h2>Tên Sản Phẩm iPhone 16</h2> <!-- h2 là tiêu đề phụ -->
                <p>Giá: 25.000.000đ</p> <!-- p dùng cho đoạn văn -->
                <p>Đánh giá: 5 sao</p>
                <p>Mô tả ngắn về sản phẩm...</p>
            </article>

        </section>

        <section id="specifications">
            <h3>Thông số kỹ thuật</h3>
            <table border="1"> <!-- table để hiển thị dữ liệu dạng bảng -->
                <tr>
                    <th>Màn hình</th> <!-- th là tiêu đề (in đậm) -->
                    <td>6.1 inch</td> <!-- td là dữ liệu -->
                </tr>
                <tr>
                    <th>Chip</th>
                    <td>A18 Bionic</td>
                </tr>
            </table>
        </section>

        <section id="reviews">
            <h3>Đánh giá từ khách hàng</h3>
            <article>
                <p><strong>Nguyễn Văn A:</strong> Máy rất đẹp!</p> <!-- strong để tô đen tên -->
            </article>
        </section>

    </main>

    <aside> <!-- aside vì đây là nội dung phụ (sp liên quan) -->
        <h3>Sản phẩm tương tự</h3>
        <ul>
            <li>iPhone 15</li>
            <li>iPhone 14</li>
        </ul>
    </aside>

    <footer> 
        <p>&copy; 2026 Shop Công Nghệ</p>
    </footer>

</body>
</html>
```

## Câu C2:
Quan điểm “dùng `<div>` cho mọi thứ rồi thêm class là đủ” nghe có vẻ tiện, nhưng về lâu dài lại gây nhiều bất lợi.

Thứ nhất là SEO (tối ưu công cụ tìm kiếm). Các thẻ semantic như `<header>`, `<nav>`, `<main>`, `<article>`, `<section> `giúp công cụ tìm kiếm hiểu rõ cấu trúc và nội dung trang. Nếu tất cả đều là `<div>`, bot phải “đoán” ý nghĩa, dẫn đến việc index kém chính xác hơn. Một trang có cấu trúc rõ ràng thường được đánh giá cao hơn về mức độ liên quan và chất lượng nội dung.

Thứ hai là Accessibility (khả năng truy cập). Người dùng sử dụng screen reader (trình đọc màn hình) phụ thuộc vào các thẻ semantic để điều hướng. Ví dụ, họ có thể nhảy nhanh tới `<nav>` hoặc `<main>`. Nếu chỉ dùng `<div>`, trải nghiệm này gần như bị mất, khiến website khó dùng với người khiếm thị.

Ví dụ: khi bạn dùng `<nav aria-label="breadcrumb">` kết hợp `<ol>` cho breadcrumb, screen reader sẽ thông báo đây là “navigation” và danh sách có thứ tự, giúp người dùng hiểu ngay họ đang ở đâu trong hệ thống. Nếu chỉ dùng` <div>` + CSS, thông tin này không được truyền tải.

Tuy vậy, `<div>` vẫn rất cần thiết. Nó phù hợp khi bạn chỉ cần group các phần tử để styling hoặc layout, ví dụ chia grid, flexbox, hoặc bọc nhiều thành phần không mang ý nghĩa nội dung cụ thể.

link videos trong google drive: (https://drive.google.com/file/d/13PEAqO-9L34oCQigngswjw9R7Im3bYDg/view?usp=sharing)





