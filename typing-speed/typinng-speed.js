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
const total = allWord.length;

input.focus();

input.addEventListener('input', event => {
	const { value: inputValue } = event.target;
	const currentInputValue = inputValue.replace(/ +/g, ' ');
	const length = currentInputValue.length;
	if (currentInputValue) {
		const textDecoration = allWord.slice(0, length);
		const wordInputSplit = inputValue.split('');

		const mapTextDecoration = new Map();
		textDecoration.forEach((element, index) => {
			mapTextDecoration.set(index, element);
		});

		let totalCorrect = 0;

		const allTextInput = wordInputSplit
			.map((item, index) => {
				if (
					mapTextDecoration.get(index) &&
					mapTextDecoration.get(index) === item
				) {
					totalCorrect += 1;
					return `<span class='hightlight'>${mapTextDecoration.get(
						index
					)}</span>`;
				} else if (!mapTextDecoration.get(index)) {
					return ``;
				} else {
					return `<span class="error" >${mapTextDecoration.get(
						index
					)}</span>`;
				}
			})
			.join('');

		const remainText = allWord.slice(length).join('');

		text.innerHTML = allTextInput + remainText;
		const percent = (totalCorrect / total) * 100;
		progress.style.width = `${percent}%`;
	}
});
