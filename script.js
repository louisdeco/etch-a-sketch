// Get the color
let color = "#43DA86";

// Update the color
const colorSelector = document.querySelector("#color");
colorSelector.addEventListener("input", updateFirst);

function updateFirst(e) {
    color = e.target.value;
};

// Create the canvas
const buttonSizeSelector = document.querySelector("#btn");
buttonSizeSelector.addEventListener("click", () => {
    // Clean the canvas
    removeAllChildNodes();

    // Create the canvas
    const userInputValue = +document.querySelector("#size").value;
    createPixels(userInputValue);
});

function createPixels(size) {
    const numberOfDivs = size * size;
    const sizeOfPixel = 100 / size;
    const canvas = document.querySelector("#canvas");

    for (let i=0; i<numberOfDivs; i++) {
        let pixel = document.createElement("div");
        pixel.setAttribute("style", `width: ${sizeOfPixel}%; height: ${sizeOfPixel}; background-color: white`);
        pixel.classList.add("pixel");
        pixel.addEventListener("mouseover", colorHovering);
        canvas.appendChild(pixel);
    };
};

function removeAllChildNodes() {
    const parent = document.querySelector("#canvas");
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    };
};

// Hovering effect
function colorHovering(e) {
    e.target.style.backgroundColor = color;
}


// Rainbow mode
const rainbowSelector = document.querySelector("#check");
rainbowSelector.addEventListener("change", () => {
    const pixels = document.querySelectorAll(".pixel");
    if (rainbowSelector.checked) {
        pixels.forEach((pixel) => {
            pixel.addEventListener("mouseover", randomColor);
        });
    }
    else {
        pixels.forEach((pixel) => {
            pixel.removeEventListener("mouseover", randomColor);
        });        
        color = colorSelector.value;
    }

});

// Random color
function randomColor(e) {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    e.target.style.backgroundColor = "rgb("+red+", "+green+", "+blue+")";
}