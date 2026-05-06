## PHẦN A - KIỂM TRA ĐỌC HIỂU

## Câu A1: Liệt kê 3 cách nhúng CSS vào HTML (inline, internal, external)
1. Inline CSS 
- VD: `<h1 style="color: #2563eb; font-size: 32px;">Tiêu đề</h1>`
- Ưu điểm: Có độ ưu tiên cao nhất, hữu ích khi muốn ghi đè (override) style khẩn cấp cho một phần tử duy nhất.
- Nhược điểm: Không tái sử dụng được, khó bảo trì.
- Chỉ dùng khẩn cấp / override tạm thời
2. Internal CSS
- VD:
```html 
 <head>
    <style>
        h1 { color: #2563eb; font-size: 32px; }
    </style>
</head> 
```
- Ưu điểm: Dễ dàng áp dụng cho toàn bộ trang, không cần tạo file CSS riêng.
- Nhược điểm: Không tái sử dụng được cho các trang khác, làm tăng kích thước file HTML, khó quản lý khi làm dự án lớn.
- Dùng cho prototype hoặc trang đơn
3. External CSS
- VD: 
```html
<head>
    <link rel="stylesheet" href="styles.css">
</head>
```
```css
/* styles.css */
h1 { color: #2563eb; font-size: 32px; }
```
- Ưu điểm: Tái sử dụng được cho nhiều trang, dễ bảo trì, giúp tách biệt nội dung và trình bày.
- Nhược điểm: Cần thêm yêu cầu HTTP để tải file CSS, có thể làm chậm tốc độ tải trang nếu file CSS lớn.
- Dùng cho dự án lớn và môi trường Production.

 **Câu hỏi thêm:** Nếu cùng 1 element có cả 3 cách CSS đồng thời áp dụng, cách nào "thắng"? Giải thích tại sao.
- Cách "thắng" là Inline CSS, sau đó đến Internal CSS và  External CSS.
- Lý do: CSS có một hệ thống ưu tiên (specificity) và thứ tự áp dụng. Inline CSS có độ ưu tiên cao nhất vì nó áp dụng trực tiếp vào phần tử, hai sau có độ ưu tiên ngang nhau về mặt kỹ thuật, trình duyệt sẽ đọc code từ trên xuống dưới. Quy tắc nào được trình duyệt đọc sau cùng sẽ là quy tắc cuối cùng được áp dụng.

## Câu A2:
```css
1. h1                           → Chọn: <h1>ShopTLU</h1> 
2. .price                       → Chọn: <p class="price">25.990.000đ</p> 
3. #app header                  → Chọn: <header class="top-bar dark">...</header>
4. nav a:first-child             → Chọn: <a href="/" class="active">Home</a>
5. .product.featured h2         → Chọn: <h2>MacBook Pro</h2>
6. article > p                  → Chọn: Cả 4 thẻ <p> nằm trong 2 bài viết
7. a[href="/"]                  → Chọn: <a href="/" class="active">Home</a>
8. .top-bar.dark h1              → Chọn: <h1>ShopTLU</h1>
```