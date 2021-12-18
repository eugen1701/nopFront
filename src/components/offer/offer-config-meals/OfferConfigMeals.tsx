import React from 'react';
import "./OfferConfigMeals.scss";

export const OfferConfigMeals: React.FC<{}> = () => {
  return (
    <section id="offer-config-meals">
      <h3 className="text-black text-xmedium">Meals</h3>
      <br />  
      <ul id="offer-config-meals__ul" className="ul">
        <li>
          <h4 className="text-medium">Fish & Chips</h4>
          <br />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ex tortor, dictum ac iaculis sit amet, auctor in dolor. Donec fermentum, neque vitae iaculis efficitur.</p>
          <button className="button-no-background button-medium">Edit Meal</button>
        </li>
      </ul>
    </section>
  )
} 