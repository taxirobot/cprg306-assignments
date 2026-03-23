"use client";
import {useState, useEffect} from "react"

export function MealIdeas({ingredient}) {
    var [meals, setMeals] = useState([]);

    const loadMealIdeas = async (ingredient) => {
        setMeals(await fetchMealIdeas({ingredient}))
        console.log(meals)
    }

    useEffect(() => {loadMealIdeas(ingredient)}, [ingredient]);

    if (meals.length == 0) {
        console.log("empty")
    } else {
        console.log("not empty")
        console.log(meals)
    }

    return (
        <div>
            <h1 className="font-bold text-2xl py-1">
                Meal Ideas
            </h1>
            <ul>
                {meals.map((meal) => (
                                    <div key={meal.idMeal} className="my-2">
                                        <p>
                                            {meal.strMeal}
                                        </p>
                                        <img src={meal.strMealThumb} className="size-50"/>
                                    </div>
                                ))}
            </ul>
        </div>
    )
}

async function fetchMealIdeas({ingredient}) {
    const endpoint = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    try {
        console.log(ingredient)
        const response = await fetch(endpoint)
        console.log(response)
        const data = await response.json();
        console.log(data.meals)
        if (data.meals) {
        return (data.meals);
        }
        else {return([])}
    } catch (error) {
        console.error("Error", error);
    }
} 