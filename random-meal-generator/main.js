var container = document.querySelector('.container');
var btnGetMeal = document.getElementById('getMeal');
var mealElement = document.getElementById('meal');
console.log(mealElement);
btnGetMeal.addEventListener('click', function () {
    console.log('click btn');
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(function (res) { return res.json(); })
        .then(function (res) {
        createMeal(res.meals[0]);
    })["catch"](function (err) { return console.log(err); });
});
function createMeal(meal) {
    var meal__ingredient__list = "";
    for (var key in meal) {
        if (key.indexOf('strIngredient') !== -1 && meal[key]) {
            var length_1 = 'strIngredient'.length;
            var indexNumber = key.slice(length_1);
            meal__ingredient__list += "<li class=\"ingredient__item\">\n\t\t" + meal[key] + " - " + meal["strMeasure" + indexNumber] + "\n\t</li>";
        }
    }
    console.log(meal__ingredient__list);
    var mealContent = "\n\t<div class=\"row meal\">\n\t<div class=\"meal__intro\">\n\t\t<div class=\"meal__image\">\n\t\t\t<img\n\t\t\t\tsrc=\"" + meal.strMealThumb + "\"\n\t\t\t/>\n\t\t</div>\n\t\t<ul class=\"meal__tags\">\n\t\t\t<li class=\"meal__tags__item\">\n\t\t\t\t<span>Category:</span>\n\t\t\t\t<span>" + meal.strCategory + "</span>\n\t\t\t</li>\n\t\t\t<li class=\"meal__tags__item\">\n\t\t\t\t<span>Area:</span>\n\t\t\t\t<span>" + meal.strArea + "</span>\n\t\t\t</li>\n\t\t\t<li class=\"meal__tags__item\">\n\t\t\t\t<span>Tags:</span>\n\t\t\t\t<span>" + (meal.strTags ? meal.strTags : '') + "</span>\n\t\t\t</li>\n\t\t</ul>\n\t\t<div class=\"meal__preps\">\n\t\t\t<h5>Ingredients</h5>\n\t\t\t<ul class=\"meal__ingredient__list\">\n\t\t\t\t" + meal__ingredient__list + "\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n\t<div class=\"meal__guide\">\n\t\t<h5 class=\"meal__guide__title\">\n\t\t\t" + meal.strMeal + "\n\t\t</h5>\n\t\t<p>\n\t\t\t" + meal.strInstructions + "\n\t\t</p>\n\t</div>\n</div>\n<div class=\"row video\">\n\t\t\t\t\t<h5>Video recipe</h5>\n\t\t\t\t\t<iframe\n\t\t\t\t\t\twidth=\"800\"\n\t\t\t\t\t\theight=\"450\"\n\t\t\t\t\t\tsrc=\"https://www.youtube.com/embed/" + meal.strYoutube.slice(-11) + "\"\n\t\t\t\t\t\ttitle=\"YouTube video player\"\n\t\t\t\t\t\tframeborder=\"0\"\n\t\t\t\t\t\tallow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\"\n\t\t\t\t\t\tallowfullscreen\n\t\t\t\t\t></iframe>\n\t\t\t\t</div>\n";
    mealElement.innerHTML = mealContent;
}
