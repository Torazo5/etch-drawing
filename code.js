const changeDimension = document.getElementById('change')
function createGrid(dimension){                 
    const flexc = document.getElementById('flex-container'); 
    flexc.innerHTML = '';  
    for (let e =0; e<dimension;e++){
    const fcontainer = document.createElement('div'); 
    fcontainer.classList.add('flex-container'); 
    for (let i = 0; i < dimension; i++) {
        const new_div = document.createElement('div');
        new_div.addEventListener('mouseover', () =>{
            console.log('HOVERED')
            new_div.style.backgroundColor = 'black'
        })
        fcontainer.appendChild(new_div);
    }
    flexc.appendChild(fcontainer);
    }
}
createGrid(16)
changeDimension.addEventListener('click', () => {
    let dimension = prompt('New dimensions:')
    createGrid(dimension)
})