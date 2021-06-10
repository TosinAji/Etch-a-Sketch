'use script'

const grid = document.querySelector('#grid');

// const gridSections = document.querySelectorAll('.grid-section');
// gridSections.forEach(section => section.addEventListener('mouseenter', changeColour));

const resetButtton = document.querySelector('#reset');
resetButtton.addEventListener('click', resetBoard);


createNewBoard(16);

function changeColour(event) {
    this.classList.add('hover');
}; 

function resetBoard(event) {
    let size = +prompt("Next board size ", "16");

    const gridSections = document.querySelectorAll('.grid-section');
    gridSections.forEach(section => section.remove());
    createNewBoard(size);
};

function createNewBoard(size) {
    for (let current = 0; current < (size*size); current++ ) {
        const gridSection = document.createElement('div');
        gridSection.classList.add('grid-section');
        grid.appendChild(gridSection);
    }

    const gridSections = document.querySelectorAll('.grid-section');
    gridSections.forEach(section => section.addEventListener('mouseenter', changeColour));

};