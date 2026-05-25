### PHẦN A — ĐỌC HIỂU (20 điểm)
#### Câu A1 (10đ) — Grid System

| Kích thước | < 768px | 768px - 991px | ≥ 992px |
|------------|---------|---------------|---------|
| **Số cột** | 1 cột   | 2 cột         | 4 cột   |
| **Box layout** | Xếp chồng lên nhau (1 hàng 1 box) | 2 hàng, mỗi hàng 2 box | 1 hàng ngang chứa cả 4 box |

```text
Mobile (< 768px)      Tablet (768-991px)    Desktop (≥ 992px)
┌────────────┐        ┌──────┬──────┐       ┌───┬───┬───┬───┐
│   Box 1    │        │  B1  │  B2  │       │B1 │B2 │B3 │B4 │
├────────────┤        ├──────┼──────┤       └───┴───┴───┴───┘
│   Box 2    │        │  B3  │  B4  │
├────────────┤        └──────┴──────┘
│   Box 3    │
├────────────┤
│   Box 4    │
└────────────┘
```

**Giải thích câu hỏi thêm:**
1. **`col-md-6` là gì?** Phần tử chiếm 6/12 cột (50% chiều rộng) trên màn hình từ mức Medium trở lên (≥ 768px).
2. **Tại sao không cần `col-sm-12`?** Do cơ chế **Mobile-First**, `col-12` đã đặt độ rộng 100% cho mọi kích thước từ nhỏ nhất trở lên (bao gồm SM), nên viết thêm là dư thừa.

#### Câu A2 (10đ) — Utilities & Components

1. **Giải thích `d-none d-md-block`:**
   - **Ẩn:** Trên các màn hình nhỏ hơn 768px (Mobile).
   - **Hiện:** Dưới dạng `display: block` trên các màn hình từ mức Medium trở lên (≥ 768px). Thường dùng để ẩn các thành phần phức tạp trên điện thoại.
2. **5 Spacing Utilities:**
   - `mt-3`: Margin top (lề trên) mức 3.
   - `px-4`: Padding trái và phải (trục X) mức 4.
   - `mb-auto`: Margin bottom tự động (dùng để đẩy các phần tử khác trong flexbox).
   - `ms-2`: Margin start (lề bên trái trong ngôn ngữ LTR) mức 2.
   - `pt-5`: Padding top mức 5 (mức đệm lớn nhất).
3. **Sự khác nhau giữa các loại Container:**
   - `.container`: Có chiều rộng cố định (max-width) thay đổi theo từng breakpoint (nhảy bậc).
   - `.container-fluid`: Luôn chiếm 100% chiều rộng màn hình ở mọi kích thước.
   - `.container-md`: Chiếm 100% chiều rộng ở Mobile và Tablet nhỏ, chỉ bắt đầu có chiều rộng cố định từ mức Medium (≥ 768px) trở lên.
### PHẦN C — PHÂN TÍCH (20 điểm)
#### Câu C1 (10đ) — Tùy biến Bootstrap
1. **Quy trình:** Cần công cụ biên dịch SASS (như Live Sass Compiler). Tạo file `.scss`, khai báo `$primary: #E63946;` trước khi `@import "bootstrap"`, sau đó biên dịch ra file `.css`.
2. **Tại sao dùng SASS?** Giúp thay đổi đồng bộ (nút, link, alert tự đổi màu theo) và giữ code sạch, tránh lạm dụng `!important` để ghi đè CSS thủ công.

#### Câu C2 (10đ) — So sánh
1. **So sánh:**
   - **CSS thuần:** Viết nhiều dòng code, tốn thời gian tự chỉnh responsive, nhưng tự do tùy biến.
   - **Bootstrap:** Code cực ngắn (dùng class), dev rất nhanh, responsive có sẵn nhưng UI dễ bị rập khuôn.
2. **Nên dùng:** Dự án cần nhanh (MVP), trang quản trị (Admin), làm việc nhóm cần quy chuẩn.
3. **Không nên dùng:** Website có thiết kế độc bản, sáng tạo cao hoặc yêu cầu dung lượng file CSS phải cực nhẹ.