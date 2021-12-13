const container = document.querySelector('.container');
function grids(x) {
	for (let g = 1; g <= x; g++) {
		let div = document.createElement('div');
		div.classList.add('div');
		container.appendChild(div);
	}
}
grids(256);

let color = document.querySelector('.container');
color.addEventListener('mouseover', function(e) {
	e.target.style.backgroundColor = 'purple';
});

let btn = document.querySelector('button');
btn.addEventListener('click', () => {
	while (container.firstChild) {
		container.removeChild(container.firstChild);
	}
	newGrid = prompt('No.');
	grids(newGrid);
});
