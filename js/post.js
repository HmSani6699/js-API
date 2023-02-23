function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => display(data))
}

function display(posts) {
    const container = document.getElementById('post-container');
    for (const post of posts) {
        console.log(post)
        const div = document.createElement('div');
        div.classList.add('post')
        div.innerHTML = `
        <h3>User id:${post.id}</h3>
        <h5>${post.title}</h5>
        <p>${post.body}</p>
        `;
        container.appendChild(div)
    }

}
loadPost();