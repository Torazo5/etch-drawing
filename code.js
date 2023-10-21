let dimension = 16
const container = document.getElementById('gridContainer');
  // Create 256 grid squares (16x16)
  for (let i = 0; i < (dimension*dimension); i++) {
    const gridSquare = document.createElement('div');
    gridSquare.classList.add('grid-square');
    gridSquare.addEventListener('mouseover', () => {
        gridSquare.style.backgroundColor = 'black';
    });
    container.appendChild(gridSquare);
  }

const change_dimensions =document.getElementById('change')
change_dimensions.addEventListener('click', () =>{
  let dimension = prompt('what dimensions do you want?')
})

