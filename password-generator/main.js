const passwordElement = document.getElementById('password');
const btnCopy = document.querySelector('.btn-copy');
const inputElements = document.querySelectorAll('input[type="checkbox"]');
const generatorBtn = document.getElementById('generator');
const inputNumberElement = document.querySelector('.number-password');

const numbers = new Array(10).fill(1).map((_, index) => index);
const upperCaseLetters = new Array(26)
	.fill(65)
	.map((item, index) =>  String.fromCharCode(item + index));

const lowercaseLetters = upperCaseLetters.map(item => item.toLocaleLowerCase())
const lengthPassword = inputNumberElement.value;

console.log(lengthPassword)

function setLengthOfPassword () {
	inputNumberElement.addEventListener('change', function(e){
		const {value} = e.target;
		if(value) return parseInt(value);
		return 0;
	})

	return 0;
}



generatorBtn.addEventListener('click', () => {
	console.log('click button');
	const length = setLengthOfPassword();
})