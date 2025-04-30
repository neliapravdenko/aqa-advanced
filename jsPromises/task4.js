class Todos {
    constructor(url) {
        this.url = url
    }

    async getTodoObj() {
        const response = await fetch(this.url);
        if (response.ok) {
            return response.json();
        } else {
            throw new Error(`Status code: ${response.status}`);
        }

    }
}

class Users {
    constructor(url) {
        this.url = url
    }

    async getUserObj() {
        const response = await fetch(this.url);
        if (response.ok) {
            return response.json();
        } else {
            throw new Error(`Status code: ${response.status}`);
        }

    }
}

const todo = new Todos('https://jsonplaceholder.typicode.com/todos/1');
const user = new Users('https://jsonplaceholder.typicode.com/users/1');

const allPromises = Promise.all([
    todo.getTodoObj(),
    user.getUserObj()
])
    .then(([todo, user]) => {
        console.log("All results: ", { todo, user });
        return { todo, user };
    })
    .catch(error => console.error("Error in Promise.All: ", error));

const racePromises = Promise.race([
    todo.getTodoObj(),
    user.getUserObj()
])
    .then(result => {
        console.log("Race winner: ", result);
        return result;
    })
    .catch(error => console.error("Error in Promise.race: ", error));