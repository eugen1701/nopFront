import React from 'react';
import './IngredientCard.scss';
// import { IIngredient } from '../../../models/ingredient/IIngredient';


interface IngredientCardProps {
  name: string,
  unit: string,
}

export const IngredientCard: React.FC<IngredientCardProps> = (props) => {
  return (
    <article className='ingredient-card rounded-corners border flex-column flex-space-between'>
      <div>
        <h3>{ props.name }</h3>
        <p className='text-small'>Unit: { props.unit }</p>
      </div>
      <span className='button text-bold text-green pull-down'>Edit Ingredient</span>
    </article>
  );
}