//function declaration
function calculateRectangleArea(width, height) {
	return width * height;
}

console.log('Rectangle area = ', calculateRectangleArea(13, 20));

//function expression
const calculateRectangleAreaExpr = function (width, height) {
	return width * height;
};

console.log('Rectangle area = ', calculateRectangleAreaExpr(12.5, 15));

//arrow function
const calculateRectangleAreaArrow = (width, height) => width * height;

console.log('Rectangle area = ', calculateRectangleAreaArrow(7, 10));
