const input = document.querySelector('#text-field');
const progress = document.querySelector('.progress-inner');
const text = document.querySelector('.text');
const wpm = document.querySelector('#wpm');
const time = document.querySelector('#time');
let startTime = Date.now();
let currentIndex = 0;
let currentIndexOfParagraph = 0;
let isMatch = false;
let completedWords = [];
let inputText = '';
let lastLetter = '';

const allText = text.innerText;
const allWord = allText.split('');
let words = allWord;

input.focus();

input.addEventListener('input', event => {
	const { value: inputValue } = event.target;
	const word = words[0];
	const currentInputValue = inputValue.replace(/ +/g, ' ');
	const length = currentInputValue.length;
	if (currentInputValue) {
		const textDecoration = allWord.slice(0, length);
		const wordInputSplit = inputValue.split('');

		const mapTextDecoration = new Map();
		textDecoration.forEach((element, index) => {
			mapTextDecoration.set(index, element);
		});

		const allTextInput = wordInputSplit
			.map((item, index) => {
				console.log(mapTextDecoration.get(index));
				if (mapTextDecoration.get(index) && mapTextDecoration.get(index) === item && item) {
					return `<span class='hightlight'>${mapTextDecoration.get(
						index
					)}</span>`;
				} else {
					return `<span >${mapTextDecoration.get(index)}</span>`;
				}
			})
			.join('');

		console.log(allTextInput);

		const remainText = allWord.slice(length).join('');

		text.innerHTML = allTextInput + remainText;
		// 		console.log(textDecoration);
		// 		const newText = allText
		// 			.split('')
		// 			.map((char, charIndex) => {
		// 				let isHightLight = false;
		//
		// 				if (charIndex <= inputValue.length) {
		// 					return inputValue
		// 						.split('')
		// 						.map((text, idx) => {
		// 							if (text === char && charIndex === idx) {
		// 								isHightLight = true;
		// 								return `<span class=${
		// 									isHightLight ? 'hightlight' : 'normal'
		// 								}>${char}</span>`;
		// 							}
		// 							return '';
		// 						})
		// 						.join('');
		// 				}
		//
		// 				return `<span>${char}</span>`;
		// 			})
		// 			.join('');
		//
		// 		text.innerHTML = newText;
	}
});
