import React, { useState } from 'react';
import './MealsPage.scss';
import '../../assets/shared_sass/_styles.scss';
import { MealCard } from '../../components/meal/meal-card/MealCard';
import { IMeal } from '../../models/meal/IMeal';
import { IIngredient } from '../../models/ingredient/IIngredient';


export const MealsPage: React.FC = () => {
  return (
    <div id="meals-page">
      <h1 className='text-black text-large'>Meals</h1>
      <br />

      <ul id="meals-page__meals-container" className='ul grid-3-columns'>
        <li>
          <MealCard 
            title="Fish and Chips"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ex tortor, dictum ac iaculis sit amet, auctor in dolor. Donec fermentum, neque vitae iaculis efficitur."
            ingredients={new Array<IIngredient>()}
          />
        </li>
      </ul>
    </div>
  );
}