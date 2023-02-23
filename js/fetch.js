
function displayData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => button(data))
}

const button = data => console.log(data);