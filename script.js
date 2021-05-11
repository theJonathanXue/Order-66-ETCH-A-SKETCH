
const container = document.querySelector('#squareContainer');
const optionsButton = document.querySelectorAll('.colorButtons');
const resetButton = document.querySelector('#resetButton');
let color = 'black';


window.addEventListener("load", startingGrid);
resetButton.addEventListener("click", resetGrid);
optionsButton.forEach(colorButtons => colorButtons.addEventListener('click', changeColor));
optionsButton.forEach(colorButtons => colorButtons.addEventListener('mouseover', buttonHover));
optionsButton.forEach(colorButtons => colorButtons.addEventListener('mouseout', buttonStandard));

function startingGrid() {
    generateGrid(66);
}

function generateGrid(size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    let gridArea = size * size;
    for (let i = 0; i < gridArea; i++) {
        const gridPixels = document.createElement("div");
        gridPixels.classList = "gridPixels";
        gridPixels.addEventListener("mouseover", colorGrid);
        container.appendChild(gridPixels);
    }
}


function resetGrid() {
    let Size = prompt("Please enter your new grid size (1-100)");

    if (Size !== null) {
        Size = parseInt(Size);
        if (Size < 1 || Size > 100 || Number.isNaN(Size)) {
            alert("Enter a number from 1-100 range");
            resetGrid();
        } else {
            const gridArray = Array.from(container.childNodes);
            gridArray.forEach((element) => {
                container.removeChild(element);
            });
            generateGrid(Size);
        }
    }
}

function colorGrid() {
    switch (color) {
        case 'Sith':
            let SithColors = ['#b4061b', '#FF0000', '#000000', '#242424', '#d1001c'];
            this.style.backgroundColor = SithColors[Math.floor(
                Math.random() * SithColors.length)];
            break;
        case 'Jedi':
            let JediColors = ['#2E67F8', '#234DB8', '#173278', '#0B1838', '#2A5DDE',
        '#2FF924', '#22BA1A', '#167A11', '#9966cc'];
            this.style.backgroundColor = JediColors[Math.floor(
                Math.random() * JediColors.length)];
            break;
        case 'Wookie':
            this.style.backgroundColor = 'brown';
            break;
        default:
            this.style.backgroundColor = color;
            break;
    }
}

function changeColor(event) {
    switch (event.target.dataset.color) {
        case 'Sith':
            color = 'Sith';
            break;
        case 'Jedi':
            color = 'Jedi';
            break;
        case 'Wookie':
            color = 'Wookie';
            break;
        default:
            color = 'black';
            break;
    }
}


function buttonHover() {
    this.style.border = '5px solid red';
}

function buttonStandard() {
    this.style.border = '5px solid yellow';
}





