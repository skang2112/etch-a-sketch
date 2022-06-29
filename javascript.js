const container = document.querySelector('.container');
const pixelButton = document.querySelector('.size-change');
const normalButton = document.querySelector('.normal-mode');
const randomButton = document.querySelector('.random-mode');
const resetButton = document.querySelector('.reset');

function applyHover(e, theme) {
    if (theme == "black") {
        e.style.backgroundColor = "#6b85a0";
    }
    if (theme == "colourful") {
        e.style.backgroundColor = getRandomColour();
        e.classList.remove("etched");
    }
}

function createGrid(n, theme) {
    let total = n*n;
    let side = 640/n-2;
    for (let i=0; i<total; i++) {
        let square = document.createElement('div');
        container.appendChild(square);
        square.style.width = side + "px";
        square.style.height = side + "px";
        square.addEventListener('mouseenter', () => {
            applyHover(square, theme);
        })
    }
}

function getRandomColour() {
    var letters = '0123456789ABCDEF';
    var colour = '#';
    for (var i = 0; i < 6; i++) {
        colour += letters[Math.floor(Math.random() * 16)];
    }
    return colour;
}

function changeTheme(theme) {
    const pixels = container.children;
    for (let i=0; i<pixels.length; i++) {
        let pixel = pixels[i];
        pixel.addEventListener('mouseenter', () => {
            applyHover(pixel, theme);
        })
    }
}

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
            createGrid(16, "black");
        }
        else if (Number(pixels) < 100 && !colour) {
            createGrid(n, "black");
        }
        else if (Number(pixels) < 100 && colour) {
            createGrid(n, "colourful");
        }
    }
})

resetButton.addEventListener('click', () => {
    const pixels = container.children;
    for (let i=0; i<pixels.length; i++) {
        let pixel = pixels[i];
        pixel.style.backgroundColor = "#d3d0db";
    }
})

randomButton.addEventListener('click', () => {
    changeTheme("colourful");
    colour = true;
})

normalButton.addEventListener('click', () => {
    changeTheme("black");
    colour = false;
})

colour = false;
createGrid(16, "black");