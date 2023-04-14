const SearchFood = () => {
    const foodField = document.getElementById('InputName');
    const foodText = foodField.value;

    foodField.value = "";

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeal(data.meals))
}

const displayMeal = meals => {

    const mealSearch = document.getElementById('meal');
    mealSearch.innerHTML = "";
    meals.forEach(meal => {

        const div = document.createElement('div');
        div.innerHTML = `
        <div class="col">
                <div class="card h-100">
                    <img src="${meal.strMealThumb}" width="60px" height="250px" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h4 class="card-title">${meal.strMeal}</h4>
                        <h5>${meal.strArea}</h5>
                        <p class="card-text">${meal.strInstructions.slice(0, 250)}</p>
                        <br>
                        <p>Tags #${meal.strTags}</p>
                    
                       
                    </div>
                </div>
            </div>
        `;
        mealSearch.appendChild(div);

    })

}





const loadMeal = () => {
    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
        .then(res => res.json())
        .then(data => displayMeal1(data.meals))
}


const displayMeal1 = meals => {

    const mealSearch = document.getElementById('mealSearch');
    mealSearch.innerHTML = "";
    meals.forEach(meal => {

        const div = document.createElement('div');
        div.innerHTML = `
        <div class="col">
                <div class="card h-100">
                    <img src="${meal.strMealThumb}" width="60px" height="250px" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h4 class="card-title">${meal.strMeal}</h4>
                        <p>MealID #${meal.idMeal}</p>
                    
                       
                    </div>
                </div>
            </div>
        `;
        mealSearch.appendChild(div);

    })

}






loadMeal();