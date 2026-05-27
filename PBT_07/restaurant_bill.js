const orderItems = [
    { name: "Phở bò", price: 65000, quantity: 2 },
    { name: "Trà đá", price: 5000, quantity: 3 },
    { name: "Bún chả", price: 55000, quantity: 1 }
];

function generateBill(items, isWednesday = false, tipPercent = 5) {
    // 1. Tính tổng phụ (Subtotal)
    const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    // 2. Tính % giảm giá
    let discountPercent = 0;
    if (subtotal > 1000000) discountPercent = 15;
    else if (subtotal > 500000) discountPercent = 10;
    
    if (isWednesday) discountPercent += 5;

    // 3. Tính các chi phí
    const discountAmount = subtotal * (discountPercent / 100);
    const netTotal = subtotal - discountAmount;
    const vatAmount = netTotal * 0.08;
    const tipAmount = netTotal * (tipPercent / 100);
    const finalTotal = netTotal + vatAmount + tipAmount;

    // 4. Định dạng tiền tệ
    const f = (n) => n.toLocaleString('vi-VN') + "đ";
    const fK = (n) => (n / 1000) + "k";

    // 5. In hóa đơn
    console.log("╔══════════════════════════════════════╗");
    console.log("║        HÓA ĐƠN NHÀ HÀNG              ║");
    console.log("╠══════════════════════════════════════╣");
    
    items.forEach((item, i) => {
        const line = `║ ${i + 1}. ${item.name.padEnd(10)} x${item.quantity}    @${fK(item.price).padEnd(4)} = ${fK(item.price * item.quantity).padEnd(5)}`;
        console.log(line.padEnd(39) + "║");
    });

    console.log("╠══════════════════════════════════════╣");
    console.log(`║ Tổng cộng:`.padEnd(25) + f(subtotal).padStart(13) + " ║");
    console.log(`║ Giảm giá (${discountPercent}%):`.padEnd(25) + f(discountAmount).padStart(13) + " ║");
    console.log(`║ VAT (8%):`.padEnd(25) + f(vatAmount).padStart(13) + " ║");
    console.log(`║ Tip (${tipPercent}%):`.padEnd(25) + f(tipAmount).padStart(13) + " ║");
    console.log("╠══════════════════════════════════════╣");
    console.log(`║ THANH TOÁN:`.padEnd(25) + f(finalTotal).padStart(13) + " ║");
    console.log("╚══════════════════════════════════════╝");
}

// Chạy thử nghiệm
const todayIsWednesday = new Date().getDay() === 3;
generateBill(orderItems, todayIsWednesday, 5);