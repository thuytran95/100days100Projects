const switchContainer = document.getElementsByClassName('switch-container')[0];
const ball = document.getElementsByClassName('ball')[0];

switchContainer.addEventListener('click', () => {
	const isDown = switchContainer.classList.contains('down');
	const isUp = switchContainer.classList.contains('up');

	if (isDown) {
		switchContainer.classList.add('up');
		switchContainer.classList.remove('down');
	}

	if (isUp) {
		switchContainer.classList.add('down');
		switchContainer.classList.remove('up');
	}
});
