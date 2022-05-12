const container = document.querySelector('.container');
const SQUARE_NUMBERS = 500;
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];

function createEl() {
	const divElement = document.createElement('div');
	divElement.classList.add('cubic');

	divElement.addEventListener('mouseover', () => {
		const color = getRandomColor();
		divElement.style.backgroundColor = color;
		divElement.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
	});

	divElement.addEventListener('mouseout', () => {
		divElement.style.backgroundColor = 'hsl(0, 0%, 15%)';
		divElement.style.boxShadow = `0 0 2px #000`;
	});

	container.append(divElement)
}


function getRandomColor() {
	const length = colors.length;
	return colors[Math.floor(Math.random() * length)];
}

function createBoard() {
// 	let cubics = '';
//
	for (let i = 0; i < SQUARE_NUMBERS; i++) {
		createEl();
		// cubics += `<div class="cubic"></div>`;
	}
//
// 	container.innerHTML = cubics;

}

createBoard();
