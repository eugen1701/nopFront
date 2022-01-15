import React, {useState} from 'react';
import "./OfferConfigMeals.scss";
import {IMeal, IIngredient} from "../../../models/meal/IMeal";
import axios from "axios";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

export const OfferConfigMeals: React.FC<{}> = () => {

  const [mealInfo, setMealInfo] = useState<IMeal>({
    mealId: "",
    name: "",
    kitchenId: "",
    description: "",
    kcal: 0,
    ingredients: [
      {
        mealId: "",
        ingredientId: "",
        quantity: 0
      }
    ]
  })

  const [ingredientInfo, setIngredientInfo] = useState<IIngredient>({
    id: "",
    name: "",
    kitchenId: "",
    unit: ""
  })

  async function getIngredients(meal: IMeal) {

    const token = localStorage.getItem("token");
    const url = `http://localhost:7768/api/Meal/GetMeal/${meal.mealId}`;
    const config = {
      headers: {Authorization: `Bearer ${token}`}
    };
    try {
      const response = await axios.get(url, config);
      console.log("RESPONSE: ", response);
      return response.data;
    } catch (error: any) {
      console.log(error);
    }
    return [];
  }

  async function getMeals(){

    const token = localStorage.getItem("token");
    const url =  "http://localhost:7768/api/Meal/Get";
    const config = {
      headers: {Authorization: `Bearer ${token}`}
    };
    try{
      const response = await axios.get(url, config);
      console.log("RESPONSE: ", response);
      return response.data;
    } catch (error: any) {
      console.log(error);
    }
    return [];
  }

  async function renderIngredients(meal : IMeal) {

    const ingredients = await getIngredients(meal);
    console.log(ingredients);
    let htmlIngredients = [];
    for(let i of ingredients) {
      htmlIngredients.push(
          <button className="button button-green-neutral button-xsmall">{i.name}</button>
      );
    }
  }

  async function renderMeals() {
    let htmlListOfMeals = [];
    let meals = await getMeals();
    for(let meal of meals) {
       htmlListOfMeals.push(
          <li>
            <div>
              <h4 className="text-medium">{meal.name}</h4>
              <ul className="ul-ingredients">
                <li>
                  {renderIngredients(meal)}

                </li>
              </ul>
              <br />
              <p>{meal.description}</p>
              <br />
            </div>

            <div>
              <button className="button-no-background button-medium">Edit Meal</button>
            </div>
          </li>
      );
    }

    return htmlListOfMeals;
  }
  return (
    <section id="offer-config-meals">
      <h3 className="text-black text-xmedium">Meals</h3>
      <br />  
      <ul id="offer-config-meals__ul" className="ul">
        {renderMeals()}
      </ul>
    </section>
  )
} 