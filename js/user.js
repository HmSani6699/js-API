function loadData() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayData1(data))
}

const displayData1 = users => {
    const container = document.getElementById('list-container')
    users.forEach(data => {
        const div = document.createElement('div');
        div.innerHTML = `
        <h2>${data.name}</h2>
        <p>${data.email}</p>
        `
        container.appendChild(div);
        console.log(data)
    });
}