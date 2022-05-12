const hourElement = document.getElementById('hour');
const minuteElement = document.getElementById('minute');
const secondElement = document.getElementById('second');
const LENGTH_OF_ONE_BLOCK = 14;

//position block won't be show
const patternNumber = {
	0: [4, 7, 10],
	1: [0, 1, 3, 4, 6, 7, 9, 10, 12, 13],
	2: [3, 4, 10, 11],
	3: [3, 4, 9, 10],
	4: [1, 4, 9, 10, 12, 13],
	5: [4, 5, 9, 10],
	6: [4, 5, 10],
	7: [3, 4, 6, 7, 9, 10, 12, 13],
	8: [4, 10],
	9: [4, 9, 10]
};

function generateTime() {
	const currentDate = new Date();
	const currentHour = currentDate.getHours();
	const currentMinute = currentDate.getMinutes();
	const currentSecond = currentDate.getSeconds();

	const hourNumbers = transformingNumber(currentHour).split('');
	const minuteNumbers = transformingNumber(currentMinute).split('');
	const secondNumbers = transformingNumber(currentSecond).split('');

	hourNumbers.forEach((item, index) => {
		const numberElements = hourElement.querySelectorAll('.number');
		displayNumber(numberElements[index], +item);
	});

	minuteNumbers.forEach((item, index) => {
		const numberElements = minuteElement.querySelectorAll('.number');
		displayNumber(numberElements[index], +item);
	});

	secondNumbers.forEach((item, index) => {
		const numberElements = secondElement.querySelectorAll('.number');
		displayNumber(numberElements[index], +item);
	});
}

function transformingNumber(number) {
	const newNumber =
		number < 10 ? number.toString().padStart(2, '0') : number.toString();
	return newNumber;
}

setInterval(generateTime, 1000);

function displayNumber(element, number) {
	const hideBlocks = patternNumber[number];
	const blocks = element.querySelectorAll('.block');
	blocks.forEach((block, index) => {
		if(hideBlocks.includes(index)){
			block.classList.add('hide')
		} else{
			block.classList.remove('hide')
		}
	});
}
