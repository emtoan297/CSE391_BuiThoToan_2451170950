// --- Version 1: Classic FizzBuzz (1-100) ---
console.log("=== CLASSIC FIZZBUZZ (1-100) ===");

for (let i = 1; i <= 100; i++) {
    let output = "";
    if (i % 3 === 0) output += "Fizz";
    if (i % 5 === 0) output += "Buzz";
    
    console.log(output || i);
}


// --- Version 2: Custom FizzBuzz ---
console.log("\n=== CUSTOM FIZZBUZZ ===");

/**
 * Hàm customFizzBuzz hoạt động với bất kỳ bộ quy tắc nào
 * @param {number} n - Số lượng phần tử cần in
 * @param {Array} rules - Mảng các đối tượng { divisor: number, word: string }
 */
function customFizzBuzz(n, rules) {
    for (let i = 1; i <= n; i++) {
        let result = "";
        
        // Kiểm tra từng quy tắc trong mảng rules
        rules.forEach(rule => {
            if (i % rule.divisor === 0) {
                result += rule.word;
            }
        });

        console.log(result || i);
    }
}

// Chạy thử nghiệm với bộ rules mở rộng (Fizz, Buzz, Jazz)
customFizzBuzz(30, [
    { divisor: 3, word: "Fizz" },
    { divisor: 5, word: "Buzz" },
    { divisor: 7, word: "Jazz" }
]);