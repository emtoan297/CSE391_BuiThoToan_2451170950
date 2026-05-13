# 📋 PHIẾU BÀI TẬP 04
## PHẦN A — KIỂM TRA ĐỌC HIỂU 
### Câu A1:
| Position | Vẫn chiếm chỗ trong flow? | Tham chiếu vị trí | Cuộn theo trang? | Use case |
|----------|---------------------------|-------------------|------------------|----------|
| `static` | ✅  | không dùng(mặc định)| ✅ | Mặc định |
| `relative` | ✅ | Vị trí gốc của chính nó | ✅ | Làm điểm tựa cho con absolute, dịch chuyển  |
| `absolute` | ❌  | Cha relative gần nhất | ✅ | Badge, dropdown, tooltip, overlay |
| `fixed` | ❌ | Viewport | Không | Chat button, cookie banner, header cố định |
| `sticky` | ✅→❌ | Viewport (khi dính) | Có, dính khi scroll đến | Sticky header, sidebar |

- absolute tham chiếu body Khi không có cha nào có position khác static. Lúc đó element bay ra khỏi flow và căn dưới body.
- absolute tham chiếu parent? Khi parent (hoặc tổ tiên gần nhất) có position: relative; (hoặc absolute/fixed/sticky). Gọi là "nearest positioned ancestor".
- "Nearest positioned ancestor" là tổ tiên gần nhất có `position` không phải là static. Nó trở thành mốc tọa độ cho element con có `position: absolute`.

## Câu A2:
1. Trường hợp 1:
- 4 items → Bố cục: 4 cột đều nhau cùng hàng.
```
[  Item 1  ][  Item 2  ][  Item 3  ][  Item 4  ]
```
2. Trường hợp 2:
- 6 items →Bố cục: 3 hàng, 2 cột. mỗi hàng có 2 item và 50% mỗi item.
```
[  Item 1  ][  Item 2  ]
[  Item 3  ][  Item 4  ]
[  Item 5  ][  Item 6  ]
```
3. Trường hợp 3:
- 3 items →Bố cục: item 1 sát trái, item 2 ở giữa, item 3 sát phải
```
[  Item 1  ]       [  Item 2  ]       [  Item 3  ]
```
4. Trường hợp 4:
- 3 items →Bố cục: 3 cột trên 1 hàng. Cột 1 = 200px cố định, Cột 2 = linh hoạt (chiếm phần còn lại), Cột 3 = 200px cố định, giữa các item có gap 20px.
```
[200px]   [    1fr (co giãn)    ]   [200px]
```
5. Trường hợp 5:
- Bố cục: 3 hàng, hàng 1 hàng 2 đầy 3 item, hàng 3 chỉ có 1 item và 2 ô còn lại trống,các item có gap 10px,item cuối ở hàng 3 cột 1.
```
[ Item 1 ]  [ Item 2 ]  [ Item 3 ]
[ Item 4 ]  [ Item 5 ]  [ Item 6 ]
[ Item 7 ]  [        ]  [        ]
```