const container = document.querySelector('.container');
const pixelButton = document.querySelector('.size-change');
const randomButton = document.querySelector('.random-mode');

function applyHover(e) {
    e.classList.add("etched");
}

function createGrid(n) {
    let total = n*n;
    let side= 640/n - 2;
    for (let i=0; i<total; i++) {
        let square = document.createElement('div');
        container.appendChild(square);
        square.style.width = side + "px";
        square.style.height = side + "px";
        square.addEventListener('mouseenter', () => {
            applyHover(square);
        })
    }
}

createGrid(16);

pixelButton.addEventListener('click', () => {
    container.textContent = "";
    let pixels = prompt("How many pixels per side?");
    if (!Number(pixels) && pixels != "0") {
        alert("You did not enter a number.");
        createGrid(16);
    }
    else {
        let n = Number(pixels);

        if (n > 100 || n < 1) {
            alert("You must enter a number between 1 and 100!");
            createGrid(16);
        }
        else if (Number(pixels) < 100) {
            createGrid(n);
        }
    }
})