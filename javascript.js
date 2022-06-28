const container = document.querySelector('.container');

for (let i=0; i<256; i++) {
    let square = document.createElement('div');
    container.appendChild(square);
    square.addEventListener('mouseenter', () => {
        applyHover(square);
    })
}

function applyHover(e) {
    e.classList.add("etched");
}
