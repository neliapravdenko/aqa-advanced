const averageGrade = Math.round(Math.random() * 100);
console.log(`Оцінка: ${averageGrade}`);

switch (true) {
	case averageGrade >= 0 && averageGrade < 60:
		console.log('Незадовільно');
		break;
	case averageGrade >= 60 && averageGrade <= 70:
		console.log('Задовільно');
		break;
	case averageGrade >= 71 && averageGrade <= 80:
		console.log('Добре');
		break;
	case averageGrade >= 81 && averageGrade <= 90:
		console.log('Дуже добре');
		break;
	case averageGrade >= 91 && averageGrade <= 100:
		console.log('Відмінно');
		break;
	default:
		console.log('Невалідна оцінка');
}
