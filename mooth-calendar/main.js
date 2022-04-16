const currentYear = new Date().getFullYear();

const months = new Array(12).fill().map((_, index) => {
	const firstDate = new Date(currentYear, index, 1);
	const monthName = firstDate.toLocaleString('en-us', { month: 'long' });
	return {
		name: monthName,
	};
});

function addDays(date, days) {
	const currentDate = new Date(date);
	currentDate.setDate(currentDate.getDate() + days);
	return currentDate;
}

function getAllDays (year){
	const firstDateOfYear = new Date(year, 1,1);
	const lastDateOfYear = new Date(year, 12, 31);

	const dates = [firstDateOfYear];
	let lastDate = firstDateOfYear;

	while(lastDate.getTime() !== lastDateOfYear.getTime()){
		dates.push(addDays(lastDate, 1));
		lastDate = dates[dates.length -1];

	}

	return dates;
}


const dateList = getAllDays(currentYear);

const yearElement = document.getElementById('currentYear');
const calendar = document.getElementById('calendar');

yearElement.innerHTML = new Date().getFullYear();

let calendarHTML = '';
months.map((item, index) => {
	const monthContainer = document.createElement('div');
	monthContainer.classList.add('month')
	monthContainer.innerHTML = `<h4 class="month__name">${item.name}</h4>
	<div class='days month-${index + 1} '>
		<div class="days__list month-${index + 1} ">
		<div class="date"><span class="circle-text">Sun</span></div>
		<div class="date"><span class="circle-text">Mon</span></div>
		<div class="date"><span class="circle-text">Tue</span></div>
		<div class="date"><span class="circle-text">Wed</span></div>
		<div class="date"><span class="circle-text">Thu</span></div>
		<div class="date"><span class="circle-text">Fri</span></div>
		<div class="date"><span class="circle-text">Sat</span></div>
		</div>
	</div>`;

	calendar.appendChild(monthContainer);
});

dateList.forEach(item => {
	const month = item.getMonth();
	const month_container = document.querySelector(`.days__list.month-${month + 1}`)

	// different days between date 1st and Sunday (getDay = 0)
	if(item.getDate() === 1 && item.getDay() !== 0){
		for(let i = 0; i < item.getDay(); i++){
			const emptyEl = document.createElement('div');
			emptyEl.classList.add('date');
			emptyEl.innerHTML = '<span class="circle-text"></span>';
			month_container.appendChild(emptyEl)
		}

	}

	const existDateEl = document.createElement('div');
	existDateEl.classList.add('date');
	existDateEl.innerHTML = `<span class="circle">${item.getDate()}</span>`

	month_container.appendChild(existDateEl)



})