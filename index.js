const mealData = () => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            // console.log(data.meals)
            displayMeals(data.meals)
        })
}
const displayMeals = meals => {
    const x = document.getElementById('meal-container')
    meals.forEach(meal => {
        // console.log(meal);
        const mealsDiv = document.createElement('div');
        mealsDiv.classList.add('col');
        mealsDiv.innerHTML = `
    <div class="card">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${meal.strMeal}</h5>
                        <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
                        <p class='text-danger'>${meal.strIngredient1}</p>
                        <button onclick="loadMealDetails(${meal.idMeal})" type="button" class="btn btn-primary">Details</button>
                    </div>
                </div>
    `
        x.appendChild(mealsDiv)
    })
}

const loadMealDetails = mealId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealsDetails(data.meals[0]))

}
const displayMealsDetails = meal => {
    console.log(meal);
    const mealContainer = document.getElementById('detail-container');
    mealContainer.innerHTML = `
    <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${meal.strMealThumb}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">${meal.strInstructions}</p>
        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
    `
}

mealData()

