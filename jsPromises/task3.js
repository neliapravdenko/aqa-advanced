async function getTodoObj(itemId) {
	const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${itemId}`);
	if (response.ok) {
		return response.json();
	} else {
		throw new Error(`Status code: ${response.status}`);
	}
}

async function getUsersObj(userId) {
	const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
	if (response.ok) {
		return response.json();
	} else {
		throw new Error(`Status code: ${response.status}`);
	}
}

const todoPromise = getTodoObj(1);
const usersPromise = getUsersObj(1);

const allPromises = Promise.all([todoPromise, usersPromise])
	.then(([todo, user]) => {
		console.log('All results: ', { todo, user });
		return { todo, user };
	})
	.catch((error) => console.error('Error in Promise.All: ', error));

const racePromise = Promise.race([todoPromise, usersPromise])
	.then((result) => {
		console.log('Race winner: ', result);
		return result;
	})
	.catch((error) => console.error('Error in Promise.race: ', error));
