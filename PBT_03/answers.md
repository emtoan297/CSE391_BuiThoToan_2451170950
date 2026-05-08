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

## Câu A3:
```css
/* Trường hợp 1: content-box (mặc định) */
.box-1 {
    width: 400px;
    padding: 20px;
    border: 5px solid black;
    margin: 10px;
}
→ Chiều rộng hiển thị = 400 + 20*2 + 5*2 = 450px
→ Không gian chiếm trên trang = 450 + 10*2 = 470px

/* Trường hợp 2: border-box */
.box-2 {
    box-sizing: border-box;
    width: 400px;
    padding: 20px;
    border: 5px solid black;
    margin: 10px;
}
→ Chiều rộng hiển thị = 400px (bao gồm cả padding và border)
→ Kích thước content thực tế = 400 - 20*2 - 5*2 = 350px
→ Không gian chiếm trên trang = 400 + 10*2 = 420px

/* Trường hợp 3: Margin collapse */
.box-a { margin-bottom: 25px; }
.box-b { margin-top: 40px; }
→ Khoảng cách giữa box-a và box-b = 40px
→ Giải thích: Khi hai phần tử có margin đối diện nhau, trình duyệt sẽ áp dụng quy tắc "margin collapse" và chỉ sử dụng margin lớn hơn trong hai margin đó. Trong trường hợp này, margin-top của box-b (40px) lớn hơn margin-bottom của box-a (25px), nên khoảng cách giữa hai box sẽ là 40px thay vì 65px nếu cộng lại.
```
**Nâng cao:** Nếu `.box-a` có `margin-bottom: -10px` và `.box-b` có `margin-top: 40px`, khoảng cách = 40 - 10 = 30px. Giải thích: Trong trường hợp này, margin-bottom âm của box-a sẽ "kéo" box-b lên gần hơn, làm giảm khoảng cách giữa hai box xuống còn 30px.
## Câu A4:
1. Tính specificity score (a, b, c) cho mỗi rule

| Quy tắc | Selector | ID (a) | Class (b) | Tag (c) | Tổng điểm (Score) |
| :--- | :--- | :---: | :---: | :---: | :--- |
| **Rule A** | `p` | 0 | 0 | 1 | 1 |
| **Rule B** | `.price` | 0 | 1 | 0 | 10 |
| **Rule C** | `#main-price` | 1 | 0 | 0 | 100 |
| **Rule D** | `p.price` | 0 | 1 | 1 | 11 |

2. Element sẽ có màu đỏ.Giải thích:Trình duyệt so sánh từ trái sang phải. Rule C có 1 ID, trong khi tất cả các rule còn lại đều có 0 ID. Vì cột ID "nặng đô" nhất nên Rule C thắng tuyệt đối, bất kể các rule khác có bao nhiêu Class hay Tag đi nữa.

3. Nếu thêm `<p class="price" id="main-price" style="color: orange;">`, element có màu cam

4. Nếu Rule A thêm `!important`, element có màu đỏ. Tại điểm này, Rule A có độ ưu tiên cao nhất do có `!important`, bất kể Rule C có ID hay không. Tuy nhiên, nếu cả Rule A và Rule C đều có `!important`, thì Rule C sẽ thắng vì nó có ID, trong khi Rule A chỉ là một tag selector.

## PHẦN B — THỰC HÀNH CODE
### Bài B2:
```
Hộp 1 (content-box): chiều rộng thực tế = 350 px (đo từ DevTools)
Hộp 2 (border-box): chiều rộng thực tế = 300 px (đo từ DevTools)
Giải thích sự khác biệt:
-content-box:Trình duyệt coi width là kích thước của riêng phần nội dung. Padding và Border sẽ được cộng thêm vào ngoài width, làm hộp bị to ra so với dự tính ban đầu.
-border-box: Trình duyệt coi width đã bao gồm cả nội dung, padding và border. Điều này giúp kích thước hộp chính xác như mong muốn mà không bị ảnh hưởng bởi padding hay border.
```
### Bài B3:
1. Liệt kê 10 rules + specificity score
```css
* : 0,0,0

p : 0,0,1

.text : 0,1,0

.text.highlight : 0,2,0

[id="demo"].text : 0,2,0 (Viết sau nên thắng rule 4)

#demo : 1,0,0

p#demo : 1,0,1

#demo.text : 1,1,0

#demo.text.highlight : 1,2,0

p#demo.text.highlight : 1,2,1
```
2. Element có màu đen. Giải thích: Rule p#demo.text.highlight có điểm Specificity cao nhất (1,2,1). Trong CSS, trình duyệt sẽ chọn quy tắc có độ ưu tiên cao nhất để áp dụng, các quy tắc thấp hơn sẽ bị ghi đè (overwritten).
4. Kết quả không đổi,nếu các rule có điểm Specificity khác nhau. Rule có điểm cao hơn luôn thắng dù nó nằm ở đầu hay cuối file.

## PHẦN C — DEBUG & SUY LUẬN 
### Câu C1:
1. Tính chiều rộng **thực tế** của sidebar và content (content-box!)
- Sidebar: 300 + 20 + 20 + 1 + 1 = 342px
- Content: 660 + 30 + 30 + 1 + 1 = 722px
2. Giải thích tại sao layout bị vỡ
- Vì box-sizing mặc định là content-box, nên width chỉ tính phần nội dung,Padding và border vẫn được cộng vào ngoài width.
- Tổng chiều rộng của cả 2 khối là: 342px + 722px = 1064px
- Trong khi đó,.container của bạn chỉ rộng có 960px. Vì 1064 > 960, không gian không đủ chỗ chứa nên khối content buộc phải nhảy xuống dòng dưới.
3. Hai cách sửa lỗi
- Cách 1: Thay đổi box-sizing thành border-box cho cả 2 khối, để width đã bao gồm padding và border. Khi đó, chiều rộng thực tế của sidebar sẽ là 300px và content sẽ là 660px, tổng cộng là 960px, vừa khít với container.
- Cách 2: Tính toán lại width thủ công (Nếu vẫn dùng content-box) 

        Sidebar: width = 300 - 20 - 20 - 1 - 1 = 258px

        Content: width = 660 - 30 - 30 - 1 - 1 = 598px
        
        Lúc này: 258 + 42 (phần dư) = 300px; 598 + 62 (phần dư) = 660px. Tổng = 960px .