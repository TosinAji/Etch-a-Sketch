'use script'

const grid = document.querySelector('#grid');

// const gridSections = document.querySelectorAll('.grid-section');
// gridSections.forEach(section => section.addEventListener('mouseenter', changeColour));

const resetButtton = document.querySelector('#reset');
resetButtton.addEventListener('click', resetGrid);


createNewGrid(16);

function changeColour(event) {
    this.classList.add('hover');
}; 

function resetGrid(event) {
    let size = +prompt("Next grid size (max size is 100)", "16");
    while (size > 100 ) {
        size = +prompt("Next grid size (max size is 100)", "16");
    }
    
    const gridSections = document.querySelectorAll('.grid-section');
    gridSections.forEach(section => section.remove());
    createNewGrid(size);
};

function createNewGrid(size) {
    for (let current = 0; current < (size*size); current++ ) {
        const gridSection = document.createElement('div');
        gridSection.classList.add('grid-section');
        grid.appendChild(gridSection);
    }

    const gridSections = document.querySelectorAll('.grid-section');
    gridSections.forEach(section => section.addEventListener('mouseenter', changeColour));

    grid.style = `grid-template-columns: repeat(${size}, 1fr);`;
};


