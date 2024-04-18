// Get the color
let color;

// Updtade the color
const colorSelector = document.querySelector("#color");
colorSelector.addEventListener("input", updateFirst);

function updateFirst(e) {
    color = e.target.value;
}

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
        pixel.addEventListener("mouseover", colorHovering)
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