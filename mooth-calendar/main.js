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

	return {
		name: monthName,
		totalDays: getTotalDays(currentYear, index + 1),
		firstDateName
	};
});

const yearElement = document.getElementById('currentYear');
const calendar = document.getElementById('calendar');

yearElement.innerHTML = new Date().getFullYear();

let calendarHTML = '';
months.map(item => {
	let listDate = '';
	console.log(item.name);
	for (let i = 1; i <= item.totalDays; i++) {
		console.log(i)
	}

	calendarHTML += `<div class="month">
	<h4 class="month__name">${item.name}</h4>
	<div class='days'>

	</div>
	</div>`;
});

calendar.innerHTML = calendarHTML;

console.log(months);
