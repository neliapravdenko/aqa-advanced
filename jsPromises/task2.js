function fetchData(id) {
    return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error status code: ${response.status}`)
            }
            return response.json();
        })
}

fetchData(123456)
    .then(todo => {
        console.log(todo);
        return todo;
    })
    .catch(error => {
        console.error(error.message);
    })

