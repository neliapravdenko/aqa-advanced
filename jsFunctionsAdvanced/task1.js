const handleNum = (num, onEvenNumCb, onOddNumCb) => {
	if (num % 2 === 0) {
		onEvenNumCb(num);
	} else {
		onOddNumCb(num);
	}
};

const handleEven = (n) => {
	console.log(`Number ${n} is even`);
};

const handleOdd = (n) => {
	console.log(`Number ${n} is odd`);
};

handleNum(13, handleEven, handleOdd);
handleNum(56, handleEven, handleOdd);
