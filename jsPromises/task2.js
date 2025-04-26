function getTodoObj(itemId) {
    return fetch(`https://jsonplaceholder.typicode.com/todos/${itemId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error status code: ${response.status}`)
            }
            return response.json();
        })
}


function getUsersObj(userId) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error status code: ${response.status}`)
            }
            return response.json();
        })
}

const todoPromise = getTodoObj(1);
const usersPromise = getUsersObj(1);

const allPromises = Promise.all([todoPromise, usersPromise])
    .then(([todo, user]) => {
        console.log("All results: ", { todo, user });
        return { todo, user };
    })
    .catch(error => console.error("Error in Promise.All: ", error.message));

const racePromise = Promise.race([todoPromise, usersPromise])
    .then(result => {
        console.log("Race winner: ", result);
        return result;
    })
    .catch(error => console.error("Error in Promise.race: ", error.message));
