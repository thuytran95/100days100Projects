const btnToggle = document.getElementById('btnTheme');
const container = document.querySelector('#container');
const hourNeedle = document.querySelector('.needle.hour');
const minNeedle = document.querySelector('.needle.min');
const secondNeedle = document.querySelector('.needle.second');

btnToggle.addEventListener('click', () => {
	const currentTheme = container.getAttribute('data-theme');
	if (currentTheme === 'light') {
		btnToggle.innerHTML = 'Dark';
		container.setAttribute('data-theme', 'dark');
	} else {
		btnToggle.innerHTML = 'Light';
		container.setAttribute('data-theme', 'light');
	}
});

setInterval(() => {
	const date = new Date();
	const hourDeg = date.getHours() * 360 / 12;
	const minute = date.getMinutes() * 360 / 60;
	const second = date.getSeconds() * 360 /60;

	hourNeedle.style.transform = `rotateZ(${hourDeg + minute / 12}deg)`
	minNeedle.style.transform =  `rotateZ(${minute}deg)`;
	secondNeedle.style.transform =  `rotateZ(${second}deg)`;


});

