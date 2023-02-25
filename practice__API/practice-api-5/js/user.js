const loadData = async () => {
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();
    displayData(data.slip)
}

const displayData = (data) => {
    const container = document.getElementById('container');
    container.innerHTML = `
        <div
            class="card-body items-center text-white text-center">
            <h2  style="letter-spacing: 5px;" class="font-bold text-emerald-400">
                ADVICE#${data.id}</h2>
            <p class="text-2xl">"${data.advice}"</p>
            <div
                class="card-actions ">
                <button
                    class="btn btn-success  rounded-full"><i
                        class="fa-solid fa-grip text-2xl"></i></button>
            </div>
        </div>
    `
    console.log(data)
}
loadData()