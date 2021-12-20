import React from 'react';
import "./OfferConfigMeals.scss";

export const OfferConfigMeals: React.FC<{}> = () => {
  return (
    <section id="offer-config-meals">
      <h3 className="text-black text-xmedium">Meals</h3>
      <br />  
      <ul id="offer-config-meals__ul" className="ul">
        <li>
          <div>
            <h4 className="text-medium">Fish & Chips</h4>
              <ul className="ul">
              <li>
                <button className="button button-green-neutral button-xsmall">Fish 200g</button>
              </li>
            </ul>
            <br />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ex tortor, dictum ac iaculis sit amet, auctor in dolor. Donec fermentum, neque vitae iaculis efficitur.</p>
            <br />
          </div>

          <div>
            <button className="button-no-background button-medium">Edit Meal</button>
          </div>
        </li>
      </ul>
    </section>
  )
} 