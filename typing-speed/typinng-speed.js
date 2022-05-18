const input = document.querySelector('#text-field');
const progress = document.querySelector('.progress-inner');
const text = document.querySelector('.text');
const wpm = document.querySelector('#wpm');
const time = document.querySelector('#time');
let startTime = Date.now();

const allText = text.innerHTML;


input.focus();

input.addEventListener('input', event => {
	const { value } = event.target;
	console.log(value);
	

});
