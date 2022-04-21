const passwordElement = document.getElementsByClassName('password')[0];
const btnCopy = document.querySelector('.btn-copy');
const inputElements = document.querySelectorAll(
	'input[type="checkbox"]'
);
const generatorBtn = document.getElementById('generator');
const inputNumberElement = document.querySelector('.number-password');

const number = new Array(10).fill(1).map((_, index) => index);
const uppercase = new Array(26)
	.fill(65)
	.map((item, index) => String.fromCharCode(item + index));

const symbol = ["$", "@", "#", "%"];

const lowercase = uppercase.map(item => item.toLocaleLowerCase());
const lengthPassword = inputNumberElement.value;

function setLengthOfPassword() {
	const length = inputNumberElement.value
		? parseInt(inputNumberElement.value)
		: 0;

	return length;
}

generatorBtn.addEventListener('click', () => {
	console.log('click button');
	const length = setLengthOfPassword();
	const pattern = Array.from(inputElements).filter(item => item.checked).map(item => item.getAttribute("id"));
	console.log(pattern);


	if (!length || !pattern.length) {
		passwordElement.innerHTML = '';
	} else {
		let password = '';
		const allCharacters = pattern.reduce((res, current) => {
			if(current === 'number') return [...res, ...number];
			if(current === 'uppercase') return [...res, ...uppercase];
			if(current === 'lowercase') return [...res, ...lowercase];
			if(current === 'symbol') return [...res, ...symbol];
			return res;
		}, []);

		const lengthChar = allCharacters.length;
		for(let i = 0; i < length ; i++){
			const randomIndex = Math.floor(Math.random() * lengthChar);
			password += allCharacters[randomIndex];

		}

		passwordElement.innerHTML = password;

		console.log(allCharacters);

	}
});

btnCopy.addEventListener('click', function(e){
	navigator.clipboard.writeText(passwordElement.innerHTML);

})

