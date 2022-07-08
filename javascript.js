const container = document.querySelector('.container');
const pixelButton = document.querySelector('.size-change');
const pixelSlider = document.getElementById('slider');
const pixelDisplay = document.querySelector('.pixel-display');
const normalButton = document.querySelector('.normal-mode');
const randomButton = document.querySelector('.random-mode');
const resetButton = document.querySelector('.reset');

pixelDisplay.textContent = pixelSlider.value + " x " + pixelSlider.value; 

function round(n) {
    return Math.round(n * 100) / 100;
}

function applyHover(e, theme) {
    if (theme == "black") {
        e.style.backgroundColor = "#6b85a0";
    }
    if (theme == "colourful") {
        e.style.backgroundColor = getRandomColour();
    }
}

function createGrid(n, theme) {
    let total = n*n;
    let side = round(640/n-2);
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

pixelSlider.oninput = function() {
    container.textContent = "";
    pixelNumber = this.value;
    pixelDisplay.textContent = pixelNumber + " x " + pixelNumber;
    if (!colour) {
        createGrid(pixelNumber, "black");
    }
    else if (colour) {
        createGrid(pixelNumber, "colourful");
    }
}

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