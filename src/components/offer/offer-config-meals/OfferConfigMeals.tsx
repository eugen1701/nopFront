import React, {useEffect, useState} from 'react';
import "./OfferConfigMeals.scss";
import {IMeal, IIngredient} from "../../../models/meal/IMeal";
import axios from "axios";
import {Link} from "react-router-dom";
import Select from "react-select";
import {Popup} from "../../base/popup/Popup";
import {IOffer} from "../../../models/offer/IOffer";

interface Props {
  currentDay: number,
  currentWeek: number,
  meals: Array<IMeal>,
  mealsForSelect: Array<IMeal>,
  offer: IOffer,
  dayId: string
}


export const OfferConfigMeals: React.FC<Props> = ({currentDay, currentWeek, meals, mealsForSelect, offer, dayId}) => {

  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const [selectedMeals, setSelectedMeals] = useState<Array<any>>([]);
  const [currentMeal, setCurrentMeal] = useState<any>({});
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

  // async function getMeal(idMeal: any) {
  //   const url = `http://localhost:7768/api/Meal/GetMeal/${idMeal.id}`;
  //   const token = localStorage.getItem("token");
  //   const config = {
  //     headers: {Authorization: `Bearer ${token}`}
  //   }
  //   try{
  //     const response = await axios.get(url, config);
  //     console.log("RESPONSE MEAL: ", response.data);
  //     setCurrentMeal(response.data);
  //     return response.data;
  //   } catch (error: any) {
  //     console.log("ERROR: ", error);
  //   }
  // }

   function renderIngredients(idMeal: any) {
    // getMeal(idMeal);
    // console.log("The meal is: ", currentMeal.ingredients);
    return (
        "ingredients"
    );
  }



  function renderMeals() {
    return meals.map((meal: any) => (
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
    ))
  }

  async function addMeal() {

    let selectedMealsList = [];
    selectedMealsList = selectedMeals.map(item => item.value);
    console.log("API selected meals",selectedMealsList);
    let body = {
      meals: selectedMealsList
    }
    console.log("selected meals: ", selectedMeals);
    let url = `http://localhost:7768/api/Offer/${offer.id}/day/${dayId}`;
    const token = localStorage.getItem("token");
    const config = {
      headers: {Authorization: `Bearer ${token}`}
    }
    try {
      const response = await axios.put(url, body, config);
      console.log("Response to add meal:", response);
    } catch (error: any) {
      console.log(error);
    }
  }

  return (
    <section id="offer-config-meals">
      <h3 className="text-black text-xmedium">Meals</h3>
      <br />
      <section className='flex-row-center-y'>
        <h1 className='text-black text-large'>Meals</h1>
        <div className='flex-pull-right'>
          <button className="button-green button-small" onClick={ () => setIsPopupOpen(true) }>+ New Meal</button>
        </div>
      </section>
      <br />

      <ul id="offer-config-meals__ul" className="ul">
        {renderMeals()}
      </ul>

      <Popup
          title='Create a New Meal'
          description='Configure the meal below.'
          isOpen={ isPopupOpen }
          onCancel={ () => setIsPopupOpen(false) }
          onFinish={ () => addMeal() }
      >
        <Select
            options={mealsForSelect}
            isMulti
            onChange={ (options: any) => setSelectedMeals(options) }
        />

      </Popup>
    </section>
  )
}