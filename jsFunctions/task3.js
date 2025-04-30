const checkOrder = (available, ordered) => {
	if (ordered === 0) {
		return 'Your order is empty';
	}
	if (available < ordered) {
		return 'Your order is too large, we don’t have enough goods.';
	}
	return 'Your order is accepted';
};

console.log(checkOrder(120, 75));
console.log(checkOrder(50, 51));
console.log(checkOrder(10, 0));
