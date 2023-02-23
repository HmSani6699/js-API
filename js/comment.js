function loadData() {

    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayData(data))
}

function displayData(comments) {
    const container = document.getElementById('main-container');
    for (const comment of comments) {
        console.log(comment)
        const div = document.createElement('div');
        div.classList.add('comment')
        div.innerHTML = `
            <h2>User id : ${comment.id}</h2>
            <h3>User Name : ${comment.name}</h3>
            <h5>User Email : ${comment.email}</h5>
            <p>${comment.body}</p>

       `;
        container.appendChild(div)
    }
}
loadData()