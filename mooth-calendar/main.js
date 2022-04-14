function getTotalDays(year, month) {
	return new Date(year, month, 0).getDate();
}

const currentYear = new Date().getFullYear();

const months = new Array(12).fill().map((_, index) => {
	const firstDate = new Date(currentYear, index, 1);
	const monthName = firstDate.toLocaleString('en-us', { month: 'long' });
	const firstDateName = firstDate.toLocaleString('en-us', {
		weekday: 'short'
	});

	console.log(firstDate);

	return {
		name: monthName,
		totalDays: getTotalDays(currentYear, index + 1),
		firstDate: firstDate.getDay(),
		month: firstDate.getMonth(),
		firstDateName
	};
});

const yearElement = document.getElementById('currentYear');
const calendar = document.getElementById('calendar');

yearElement.innerHTML = new Date().getFullYear();

let calendarHTML = '';
months.map((item, index) => {
	console.log(item.firstDate);
	let listDate = '';
	for (let i = 1; i <= item.totalDays; i++) {
		const date = new Date(currentYear, item.month, i).getDate();

		// console.log(date);
		// if(i < 7 && )
	}

	const monthContainer = document.createElement('div');
	monthContainer.classList.add('month');
	monthContainer.innerHTML = `<div class="month">
	<h4 class="month__name">${item.name}</h4>
	<div class='days ${item.name}_days'>
	<div class="days__list">
	<span>Sun</span>
	<span>Mon</span>
	<span>Tue</span>
	<span>Wed</span>
	<span>Thu</span>
	<span>Fri</span>
	<span>Sat</span>
</div>
	</div>
	</div>`;

	calendar.appendChild(monthContainer);
});

// calendar.innerHTML = calendarHTML;
