import React, { useState, useEffect } from 'react';
import './MealsPage.scss';
import '../../assets/shared_sass/_styles.scss';
import { MealCard } from '../../components/meal/meal-card/MealCard';
import { IMeal } from '../../models/meal/IMeal';
import { IIngredient } from '../../models/ingredient/IIngredient';
import { Popup } from '../../components/base/popup/Popup';
import Searchable from 'react-searchable-dropdown';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import axios from 'axios';

export const MealsPage: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const [ingredients, setIngredients] = useState<any[]>([]);
  const [selectedIngredients, setSelectedIngredients] = useState<any[]>([]);
  const [newMealName, setNewMealName] = useState<string>();
  const [newMealDescription, setNewMealDescription] = useState<string>();
  const [meals, setMeals] = useState<any[]>([]);

  const config = {
    headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}
  };

  const fetchIngredients = async () => {
    console.log("asdasdasd");
    
    try {
      const response = await axios.get('http://localhost:7768/api/Ingredient/Get', config);
      setIngredients(response.data);
      console.log(`----- FETCH INGREDIENTS: ${JSON.stringify(response.data)}`)
    } catch(e) {
      alert("Some unhandled error occured.")
      console.log(e);
    }
  };

  useEffect(() => {
    fetchIngredients();
  }, [])

  function ingredientsForSelect() {
    return ingredients.map(ingredient => {
      return {
        value: ingredient.id,
        label: `${ingredient.name} - ${unitIdToName(ingredient.unit)}`
      }
    });
  }

  function unitIdToName(id: number) {
    if (id == 0) {
      return "gram"
    }
    else if (id == 1) {
      return "spoon"
    }
    else if (id == 2) {
      return "liter"
    }
    else {
      return "none"
    }
  }

  async function createMeal() {
    console.log("------ SELECTED INGREDIENTS:  ", selectedIngredients);
    console.log("------ Meal Name: ", newMealName);
    console.log("------ Meal Description: ", newMealDescription);

    const requestIngredients = selectedIngredients.map((ingredient) => {
      return {
        ingredientId: ingredient['value'],
        quantity: 0
      }
    });

    try {
      const requestBody = {
        name: newMealName,
        description: newMealDescription,
        kitchenId: localStorage.getItem("kitchenId"),
        kcal: 0,
        ingredients: requestIngredients
      };
      console.log("------ Request Body:  ", JSON.stringify(requestBody));
      console.log("------ Header", config)

      await axios.post('http://localhost:7768/api/Meal/Create', requestBody, config);
    } catch(e: any) {
      alert("Some unhandled error occured.")
      console.log(e.message);
    }

    fetchMeals()
  }


  function renderMealCards() {
    console.log("--------- Render meals: ", meals)

    const htmlMealsList = meals.map(meal => (
      <li>
        <MealCard 
          name={meal.name}
          description={meal.description}
          ingredients={meal.ingredients}
        />
      </li>
    ))

    return htmlMealsList;
  }

  const fetchMeals = async () => {    
    try {
      const response = await axios.get('http://localhost:7768/api/Meal/Get', config);
      setMeals(response.data);
      console.log(`----- FETCH MEALS: ${JSON.stringify(response.data)}`)
    } catch(e) {
      alert("Some error occured while fetching meals");
      console.log(e);
    }
  };

  useEffect(() => {
    fetchMeals();
  }, [])

  return (
    <div id="meals-page">
      <section className='flex-row-center-y'>
        <h1 className='text-black text-large'>Meals</h1>
        <div className='flex-pull-right'>
          <button className="button-green button-small" onClick={ () => setIsPopupOpen(true) }>+ New Meal</button>
        </div>
      </section>
      <br />

      <ul id="meals-page__meals-container" className='ul grid-3-columns'>
        { renderMealCards() }
      </ul>

      <Popup 
        title='Create a New Meal'
        description='Configure the meal below.'
        isOpen={ isPopupOpen }
        onCancel={ () => setIsPopupOpen(false) }
        onFinish={ () => createMeal() }
      >
        <form>
          <ul className="ul">
            <li className="input">
              <label htmlFor="meal-title">Title</label>
              <input 
                type="text" 
                name="meal-title" 
                value={ newMealName }
                onChange={ (e) => setNewMealName(e.target.value) } 
              />
            </li>

            <li className="input">
              <label htmlFor="meal-description">Description</label>
              <textarea 
                name="meal-description" 
                value={ newMealDescription }
                onChange={ (e) => setNewMealDescription(e.target.value) } 
              />
            </li>

            <li>
              <div className='flex-row-center-y'>
                <label htmlFor="meal-ingredients">Ingredients</label>
                <Link to="/ingredients" className="button-no-background button-small link flex-pull-right">Create New Ingredient</Link>
              </div>

              <Select 
                options={ingredientsForSelect()}
                isMulti
                onChange={ (options: any) => setSelectedIngredients(options) } 
              />
            </li>
          </ul>
        </form>
      </Popup>
    </div>
  );
}