const averageGrade = Math.round(Math.random() * 100);
console.log(`Оцінка: ${averageGrade}`);

if (averageGrade < 60) {
    console.log("Незадовільно");
} else if (averageGrade <= 70) {
    console.log("Задовільно");
} else if (averageGrade <= 80) {
    console.log("Добре");
} else if (averageGrade <= 90) {
    console.log("Дуже добре");
} else if (averageGrade <= 100) {
    console.log("Відмінно");
};