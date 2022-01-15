import React from 'react';
import './IngredientCard.scss';
// import { IIngredient } from '../../../models/ingredient/IIngredient';


interface IngredientCardProps {
  name: string,
  description: string,
  unit: string,
}

export const IngredientCard: React.FC<IngredientCardProps> = (props) => {
  return (
    <article className='meal-card rounded-corners border flex-column flex-space-between'>
      <div>
        <h3>{ props.name }</h3>
        <p>{ props.unit }</p>
        <ul className='meal-card__ingredients ul flex-row'>
          
        </ul>
        <br />
        
        <p className='text-small'>{ props.description }</p>
      </div>
      <span className='button text-bold text-green pull-down'>Edit Meal</span>
    </article>
  );
}