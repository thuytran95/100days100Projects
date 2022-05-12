const container = document.querySelector('.container');
const btnGetMeal = document.getElementById('getMeal');
const mealElement = document.getElementById('meal');

console.log(mealElement);

btnGetMeal.addEventListener('click', () => {
	console.log('click btn');
	fetch('https://www.themealdb.com/api/json/v1/1/random.php')
		.then(res => res.json())
		.then(res => {
			createMeal(res.meals[0]);
		})
		.catch(err => console.log(err));
});

function createMeal(meal) {
	let meal__ingredient__list = ``;
	for (const key in meal) {
		if (key.indexOf('strIngredient') !== -1 && meal[key]) {
			const length = 'strIngredient'.length;
			const indexNumber = key.slice(length);
			meal__ingredient__list += `<li class="ingredient__item">
		${meal[key]} - ${meal[`strMeasure${indexNumber}`]}
	</li>`;
		}
	}

	console.log(meal__ingredient__list);
	const mealContent = `
	<div class="row meal">
	<div class="meal__intro">
		<div class="meal__image">
			<img
				src="${meal.strMealThumb}"
			/>
		</div>
		<ul class="meal__tags">
			<li class="meal__tags__item">
				<span>Category:</span>
				<span>${meal.strCategory}</span>
			</li>
			<li class="meal__tags__item">
				<span>Area:</span>
				<span>${meal.strArea}</span>
			</li>
			<li class="meal__tags__item">
				<span>Tags:</span>
				<span>${meal.strTags ? meal.strTags : ''}</span>
			</li>
		</ul>
		<div class="meal__preps">
			<h5>Ingredients</h5>
			<ul class="meal__ingredient__list">
				${meal__ingredient__list}
			</ul>
		</div>
	</div>
	<div class="meal__guide">
		<h5 class="meal__guide__title">
			${meal.strMeal}
		</h5>
		<p>
			${meal.strInstructions}
		</p>
	</div>
</div>
<div class="row video">
					<h5>Video recipe</h5>
					<iframe
						width="800"
						height="450"
						src="https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					></iframe>
				</div>
`;

	mealElement.innerHTML = mealContent;
}
