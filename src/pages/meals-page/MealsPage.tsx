import React, { useState } from 'react';
import './MealsPage.scss';
import '../../assets/shared_sass/_styles.scss';
import { MealCard } from '../../components/meal/meal-card/MealCard';
import { IMeal } from '../../models/meal/IMeal';
import { IIngredient } from '../../models/ingredient/IIngredient';
import { Popup } from '../../components/base/popup/Popup';
import Searchable from 'react-searchable-dropdown';
import { Link } from 'react-router-dom';


export const MealsPage: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

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
        <li>
          <MealCard 
            title="Fish and Chips"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ex tortor, dictum ac iaculis sit amet, auctor in dolor. Donec fermentum, neque vitae iaculis efficitur."
            ingredients={new Array<IIngredient>()}
          />
        </li>
      </ul>

      <Popup 
        title='Create a New Meal'
        description='Configure the meal below.'
        isOpen={ isPopupOpen }
        onCancel={ () => setIsPopupOpen(false) }
        onFinish={ () => console.log("finish") }
      >
        <form>
          <ul className="ul">
            <li className="input">
              <label htmlFor="meal-title">Title</label>
              <input type="text" name="meal-title" />
            </li>

            <li className="input">
              <label htmlFor="meal-description">Description</label>
              <textarea name="meal-description" />
            </li>

            <li>
              <div className='flex-row-center-y'>
                <label htmlFor="meal-ingredients">Ingredients</label>
                <Link to="/ingredients" className="button-no-background button-small link flex-pull-right">Create New Ingredient</Link>
              </div>
              <Searchable
                value=""
                placeholder="Search" // by default "Search"
                notFoundText="No result found" // by default "No result found"
                noInput
                options={[{
                    value: '',
                    label: 'All'
                }, {
                    value: 'popular',
                    label: 'Popular'
                }]}
                onSelect={(value: any) => {
                    console.log(value);
                }}
                listMaxHeight={200} //by default 140
              />
            </li>
          </ul>
        </form>
      </Popup>
    </div>
  );
}