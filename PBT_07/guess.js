// 1. Máy chọn ngẫu nhiên một số từ 1 đến 100
const targetNumber = Math.floor(Math.random() * 100) + 1;
let guesses = [];
let attempts = 0;
const maxAttempts = 7;
let isCorrect = false;

alert("Máy đã chọn một số từ 1 đến 100. Bạn có tối đa 7 lượt đoán!");

while (attempts < maxAttempts && !isCorrect) {
    let input = prompt(`Lượt ${attempts + 1}/${maxAttempts}. Nhập số dự đoán (1-100):`);
    
    // Nếu người dùng nhấn Cancel
    if (input === null) {
        alert("Bạn đã thoát trò chơi.");
        break;
    }

    let guess = parseInt(input);

    // Validate input: Chỉ chấp nhận số 1-100
    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert("Vui lòng nhập một số hợp lệ từ 1 đến 100!");
        continue;
    }

    // Kiểm tra nếu người dùng nhập lại số đã đoán
    if (guesses.includes(guess)) {
        alert(`Bạn đã đoán số ${guess} rồi! Hãy chọn số khác.`);
        continue;
    }

    guesses.push(guess);
    attempts++;

    // Kiểm tra kết quả
    if (guess === targetNumber) {
        isCorrect = true;
        alert(`Đúng rồi! Bạn đoán đúng số ${targetNumber} sau ${attempts} lần!`);
    } else if (guess < targetNumber) {
        alert("Cao hơn một chút!");
    } else {
        alert("Thấp hơn một chút!");
    }
}

// Xử lý khi hết lượt đoán mà chưa đúng
if (!isCorrect && attempts === maxAttempts) {
    alert(`Rất tiếc! Bạn đã hết lượt. Đáp án đúng là: ${targetNumber}`);
} else if (!isCorrect && attempts < maxAttempts && attempts > 0) {
    alert("Trò chơi đã dừng lại.");
}