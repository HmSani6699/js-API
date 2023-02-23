function loadPhotos() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => displayPhotos(data))
}

function displayPhotos(photos) {
    const container = document.getElementById('photos-container')
    photos.forEach(photo => {
        const div = document.createElement('div');
        div.classList.add('photo')
        div.innerHTML = `
        <h2>User id:${photo.id}</h2>
        <h2>User Title: ${photo.title}</h2>
        <img src="${photo.thumbnailUrl}" alt="">
        `;
        container.appendChild(div)
    });
}
loadPhotos()