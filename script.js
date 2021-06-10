'use script'

const grid = document.querySelector('#grid');

for (let current = 0; current < 256; current++ ) {
    const gridSection = document.createElement('div');
    gridSection.classList.add('grid-section');
    grid.appendChild(gridSection);
}