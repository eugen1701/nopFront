import React from 'react';
import './MealCard.scss';
import { IIngredient } from '../../../models/ingredient/IIngredient';


interface MealsCardProps {
  name: string,
  description: string,
  ingredients: Array<IIngredient>
}

export const MealCard: React.FC<MealsCardProps> = (props) => {
  return (
    <article className='meal-card rounded-corners border flex-column flex-space-between'>
      <div>
        <h3>{ props.name }</h3>
        
        <ul className='meal-card__ingredients ul flex-row'>
          
        </ul>
        <br />
        
        <p className='text-small'>{ props.description }</p>
      </div>
      <span className='button text-bold text-green pull-down'>Edit Meal</span>
    </article>
  );
}