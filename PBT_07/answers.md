## PHẦN A — KIỂM TRA ĐỌC HIỂU (25 điểm)
### Câu A1 (5đ) — var / let / const

1. **Đoạn 1:** `undefined` (Do cơ chế Hoisting của `var`).

2. **Đoạn 2:** `ReferenceError` (`let` nằm trong TDZ, không thể truy cập trước khai báo).

3. **Đoạn 3:** `TypeError` (`const` là hằng số, không được gán lại giá trị).

4. **Đoạn 4:** `[1, 2, 3, 4]` (`const` cho phép thay đổi nội dung mảng/đối tượng).

5. **Đoạn 5:** `Trong block: 2` và `Ngoài block: 1` (`let` có phạm vi block scope).

### Câu A2 — Data Types & Coercion

```js
typeof null           // "object"
typeof undefined      // "undefined"
typeof NaN            // "number"

"5" + 3               // "53"
"5" - 3               // 2
"5" * "3"             // 15

true + true           // 2

[] + []               // ""
[] + {}               // "[object Object]"
{} + []               // 0
```

## Giải thích

- `"5" + 3`
  - Dấu `+` ưu tiên nối chuỗi
  - `3` được ép sang string
  - Kết quả: `"53"`

- `"5" - 3`
  - Dấu `-` chỉ dùng cho toán học
  - `"5"` được ép sang number
  - Kết quả: `2`

### Câu A3 (5đ) — So sánh == vs ===
```js
5 == "5"                  // true
5 === "5"                 // false

null == undefined         // true
null === undefined        // false

NaN == NaN                // false

0 == false                // true
0 === false               // false

"" == false               // true
```

## Quy tắc

Nên dùng:

```js
===
```

Vì:

- `===` so sánh cả giá trị và kiểu dữ liệu
- Không ép kiểu tự động
- Ít gây bug hơn
- Dễ đọc và dễ kiểm soát hơn
### Câu A4 (5đ) — Truthy & Falsy
**Các giá trị Falsy:** `false`, `0`, `-0`, `0n`, `""` (chuỗi rỗng), `null`, `undefined`, `NaN`.

**Dự đoán in ra:**

- `if ("0")` → **In A** (Chuỗi không rỗng là Truthy)
- `if ("")` → Không in (Falsy)
- `if ([])` → **In C** (Mảng là Object, luôn Truthy)
- `if ({})` → **In D** (Object luôn Truthy)
- `if (null)` → Không in (Falsy)
- `if (0)` → Không in (Falsy)
- `if (-1)` → **In G** (Số khác 0 là Truthy)
- `if (" ")` → **In H** (Chuỗi có khoảng trắng là Truthy)
### Câu A5 (5đ) — Template Literals

**Viết lại bằng Template Literals:**

1. 
```js
const greeting = `Xin chào ${name}! Bạn ${age} tuổi.`;
```

2. 
```js
const url = `https://api.example.com/users/${userId}/orders?page=${page}`;
```

3. 
```js
const html = `
<div class="card">
    <h2>${title}</h2>
    <p>${description}</p>
    <span>Giá: ${price}đ</span>
</div>`;
```
## PHẦN C — SUY LUẬN (20 điểm)

### Câu C1 (10đ) — Debug JavaScript

**1. Danh sách các lỗi và cách sửa:**

- **Lỗi 1 (Logic):** `if (giaSauGiam = 0)` đang dùng phép gán thay vì phép so sánh. 
  - *Sửa:* `if (giaSauGiam === 0)`.
- **Lỗi 2 (Type):** Tham số `giaBan` truyền vào là chuỗi `"100000"`. Dù JS tự ép kiểu khi tính toán nhưng nên chủ động ép kiểu để tránh lỗi logic.
  - *Sửa:* Dùng `Number(giaBan)` hoặc `parseInt()`.
- **Lỗi 3 (Logic hiển thị):** Khi `phanTramGiam` không hợp lệ, hàm trả về chuỗi thông báo lỗi. Khi in ra sẽ bị dính chữ "đ" ở cuối (`Phần trăm giảm không hợp lệđ`).
  - *Sửa:* Kiểm tra kết quả trả về trước khi in.
- **Lỗi 4 (Scope):** Dùng `var giamGia` bên trong hàm. 
  - *Sửa:* Thay bằng `const` vì giá trị này không thay đổi sau khi tính.
- **Lỗi 5 (Syntax):** Thiếu các dấu chấm phẩy (`;`) cuối câu lệnh (tùy quy chuẩn nhưng nên có).
- **Lỗi 6 (Asynchronous):** Lỗi "ẩn" trong vòng lặp `setTimeout` dùng `var i`.
  - *Hiện tượng:* Sẽ in ra "Item 5" năm lần thay vì từ 0 đến 4.
  - *Giải thích:* `var` có phạm vi function-scope. Khi `setTimeout` chạy (sau 1s), vòng lặp đã kết thúc và biến `i` lúc này đã bằng 5.
  - *Sửa:* Thay `var i` bằng `let i` để tạo block-scope cho mỗi vòng lặp.

**2. Code sau khi sửa hoàn chỉnh:**

```javascript
function tinhGiaGiamGia(giaBan, phanTramGiam) {
    const numericGia = Number(giaBan);
    if (phanTramGiam < 0 || phanTramGiam > 100) {
        return "Phần trăm giảm không hợp lệ";
    }
    
    const giamGia = numericGia * phanTramGiam / 100;
    let giaSauGiam = numericGia - giamGia;
    
    if (giaSauGiam === 0) {
        console.log("Sản phẩm miễn phí!");
    }
    
    return giaSauGiam;
}

// Test
const gia = tinhGiaGiamGia("100000", 20);
console.log(typeof gia === "number" ? `Giá sau giảm: ${gia}đ` : gia);

for (let i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log("Item " + i);
    }, 1000);
}
```
