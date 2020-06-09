// Grid Creation
function makeGrid(height, width) {
    const table = document.getElementById("pixelCanvas");
    // Clears/assigns the grid value
    let gridBase = '';

    // Creates the height of the grid
    for (let x = 0; x < height; x++) {
        gridBase += '<tr class="row-' + x + '">';
        // Creates the cells of the grid within the selected height
        for (let y = 0; y < width; y++) {
            gridBase += '<td class="cell" id="row-' + x + '_cell-' + y + '"></td>';
        }
        gridBase += '</tr>';
    }
    // Inserts the grid into the established table
    table.innerHTML = gridBase;

    // Enables click events to all cells in the grid via a function
    clickEnabler();
}

// Function that inserts click events to cells
function clickEnabler() {
    // Enables color selection and return user's choice
    const cells = document.getElementsByClassName('cell');
    const enableColor = document.getElementById("colorPicker");

    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener("click", function (event) {
            let activatedCell = event.target;
            activatedCell.style.backgroundColor = enableColor.value;
        });
    }
}

// Function that collects the user's width and height grid values
function submitForm() {
    event.preventDefault();
    const width = document.getElementById('inputWidth').value;
    const height = document.getElementById('inputHeight').value;
    makeGrid(height, width);
}

// Submit button of size selection
document.getElementById('sizePicker').onsubmit = function () {
    submitForm();
};
