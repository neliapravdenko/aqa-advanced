function displayText(text, time) {
	if (typeof text !== 'string') {
		console.log(`${text} must be a string!!!`);
		return;
	}

	if (typeof time !== 'number' || time < 0) {
		console.log(`${time} must be a positive number!!!`);
		return;
	}

	return setTimeout(() => console.log(text), time);
}

const timerId = displayText('Wait on me :)', 2000);
