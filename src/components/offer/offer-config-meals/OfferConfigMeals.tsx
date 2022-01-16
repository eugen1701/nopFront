import React, {useEffect, useState} from 'react';
import "./OfferConfigMeals.scss";
import {IMeal, IIngredient} from "../../../models/meal/IMeal";
import axios from "axios";

interface Props {
  currentDay: number,
  currentWeek: number,
  meals: Array<IMeal>
}


export const OfferConfigMeals: React.FC<Props> = ({currentDay, currentWeek, meals}) => {

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






  function renderMeals() {
    return meals.map((meal: any) => (
        <li>
          <div>
            <h4 className="text-medium">{meal.name}</h4>
            <ul className="ul-ingredients">
              <li>
                ingredient

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
    ))
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