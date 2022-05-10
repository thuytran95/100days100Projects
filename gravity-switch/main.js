const switchContainer = document.getElementsByClassName('switch-container')[0];
const ball = document.getElementsByClassName('ball')[0];

switchContainer.addEventListener("click", ()=>{
	switchContainer.classList.toggle('down');
	const isDown = switchContainer.classList.contains('down');
	const isUp = switchContainer.classList.contains('up');

	console.log(isDown);
	if(isDown){
		switchContainer.classList.remove('down');
		switchContainer.classList.add('up');
	}

	if(isUp){
		switchContainer.classList.remove('up');
		switchContainer.classList.add('down');
	}
})