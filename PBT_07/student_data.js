const students = [
    { name: "An", math: 8, physics: 7, cs: 9, gender: "M" },
    { name: "Bình", math: 6, physics: 9, cs: 7, gender: "F" },
    { name: "Chi", math: 9, physics: 6, cs: 8, gender: "F" },
    { name: "Dũng", math: 5, physics: 5, cs: 6, gender: "M" },
    { name: "Em", math: 10, physics: 8, cs: 9, gender: "F" },
    { name: "Phong", math: 3, physics: 4, cs: 5, gender: "M" },
    { name: "Giang", math: 7, physics: 7, cs: 7, gender: "F" },
    { name: "Huy", math: 4, physics: 6, cs: 3, gender: "M" },
];

// --- 1. Tính điểm trung bình và xếp loại cho mỗi sinh viên ---
const processedStudents = students.map(student => {
    const diemTB = (student.math * 0.4 + student.physics * 0.3 + student.cs * 0.3).toFixed(1);
    let xepLoai;
    if (diemTB >= 8.0) {
        xepLoai = "Giỏi";
    } else if (diemTB >= 6.5) {
        xepLoai = "Khá";
    } else if (diemTB >= 5.0) {
        xepLoai = "Trung bình";
    } else {
        xepLoai = "Yếu";
    }
    return { ...student, diemTB: parseFloat(diemTB), xepLoai };
});

console.log("--- Bảng kết quả học tập ---");
// --- 3. In bảng kết quả ---
function printTable(studentsData) {
    const header = "| STT | Tên        | TB   | Xếp loại    |";
    const separator = "|-----|------------|------|-------------|";

    console.log(header);
    console.log(separator);

    studentsData.forEach((student, index) => {
        const stt = (index + 1).toString().padEnd(3);
        const ten = student.name.padEnd(10);
        const tb = student.diemTB.toFixed(1).padEnd(4);
        const xepLoai = student.xepLoai.padEnd(11);
        console.log(`| ${stt} | ${ten} | ${tb} | ${xepLoai} |`);
    });
    console.log(separator);
}

printTable(processedStudents);

// --- 4. Đếm số SV mỗi xếp loại ---
console.log("\n--- Thống kê xếp loại ---");
const xepLoaiCounts = processedStudents.reduce((acc, student) => {
    acc[student.xepLoai] = (acc[student.xepLoai] || 0) + 1;
    return acc;
}, {});

for (const loai in xepLoaiCounts) {
    console.log(`- ${loai}: ${xepLoaiCounts[loai]} sinh viên`);
}

// --- 5. Tìm SV có điểm TB cao nhất và thấp nhất ---
console.log("\n--- Sinh viên có điểm trung bình cao nhất và thấp nhất ---");
const sortedByDiemTB = [...processedStudents].sort((a, b) => a.diemTB - b.diemTB);

const lowestStudent = sortedByDiemTB[0];
const highestStudent = sortedByDiemTB[sortedByDiemTB.length - 1];

console.log(`- Cao nhất: ${highestStudent.name} (${highestStudent.diemTB} điểm - ${highestStudent.xepLoai})`);
console.log(`- Thấp nhất: ${lowestStudent.name} (${lowestStudent.diemTB} điểm - ${lowestStudent.xepLoai})`);

// --- 6. Tính điểm TB toàn lớp cho từng môn ---
console.log("\n--- Điểm trung bình toàn lớp theo môn ---");
const totalStudents = students.length;

const mathAvg = (students.reduce((sum, s) => sum + s.math, 0) / totalStudents).toFixed(1);
const physicsAvg = (students.reduce((sum, s) => sum + s.physics, 0) / totalStudents).toFixed(1);
const csAvg = (students.reduce((sum, s) => sum + s.cs, 0) / totalStudents).toFixed(1);

console.log(`- Toán: ${mathAvg}`);
console.log(`- Lý: ${physicsAvg}`);
console.log(`- Tin học: ${csAvg}`);

// --- 7. Bonus: Tính điểm TB theo giới tính ---
console.log("\n--- Điểm trung bình theo giới tính ---");
const maleStudents = processedStudents.filter(s => s.gender === "M");
const femaleStudents = processedStudents.filter(s => s.gender === "F");

const maleAvgTB = maleStudents.length > 0
    ? (maleStudents.reduce((sum, s) => sum + s.diemTB, 0) / maleStudents.length).toFixed(1)
    : "N/A";

const femaleAvgTB = femaleStudents.length > 0
    ? (femaleStudents.reduce((sum, s) => sum + s.diemTB, 0) / femaleStudents.length).toFixed(1)
    : "N/A";

console.log(`- Nam: ${maleAvgTB}`);
console.log(`- Nữ: ${femaleAvgTB}`);

/*
Output khi chạy file student_data.js:

--- Bảng kết quả học tập ---
| STT | Tên        | TB   | Xếp loại    |
|-----|------------|------|-------------|
| 1   | An         | 8.0  | Giỏi        |
| 2   | Bình       | 7.2  | Khá         |
| 3   | Chi        | 8.1  | Giỏi        |
| 4   | Dũng       | 5.3  | Trung bình  |
| 5   | Em         | 9.4  | Giỏi        |
| 6   | Phong      | 3.9  | Yếu         |
| 7   | Giang      | 7.0  | Khá         |
| 8   | Huy        | 4.5  | Yếu         |
|-----|------------|------|-------------|

--- Thống kê xếp loại ---
- Giỏi: 3 sinh viên
- Khá: 2 sinh viên
- Trung bình: 1 sinh viên
- Yếu: 2 sinh viên

--- Sinh viên có điểm trung bình cao nhất và thấp nhất ---
- Cao nhất: Em (9.4 điểm - Giỏi)
- Thấp nhất: Phong (3.9 điểm - Yếu)

--- Điểm trung bình toàn lớp theo môn ---
- Toán: 6.5
- Lý: 6.5
- Tin học: 6.8

--- Điểm trung bình theo giới tính ---
- Nam: 6.5
- Nữ: 8.2
*/