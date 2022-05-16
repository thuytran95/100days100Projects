const containerElement = document.querySelector('.container');

for (let i = 0; i < 4; i++) {
	for (let j = 0; j < 4; j++) {
		const div = document.createElement('div');
		div.classList.add('box');
		div.style.backgroundPosition = `${-i * 125}px ${-j * 125}px`;
		containerElement.appendChild(div);
	}
}
