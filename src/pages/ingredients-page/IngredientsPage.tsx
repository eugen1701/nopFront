import React, { useState, useEffect } from 'react';
import './IngredientsPage.scss';
import '../../assets/shared_sass/_styles.scss';
import { Popup } from '../../components/base/popup/Popup';
import Select from 'react-select';
import axios from 'axios';

const measures = [
  { label: 'gram', value: 0 },
  { label: 'spoon', value: 1 },
  { label: 'liter', value: 2 },
  { label: 'nothing', value: 3 }
]

export const IngredientsPage: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const [newUnit, setNewUnit] = useState(2)
  const [newName, setNewName] = useState('');

  async function createIngredient() {
    if (newName === '' || newName == null) {
      alert("Ingredient name is required!");
      return;
    }

    const requestBody = {
      name: newName,
      kitchenId: localStorage.getItem("kitchenId"),
      unit: newUnit,
      meals: []
    }
    await axios.post('http://localhost:7768/api/Ingredient/Create', requestBody);
  
    fetchIngredients();
  }

  const fetchIngredients = async () => {
    const response = await axios.get('http://localhost:7768/api/Ingredient/Create')
  };


  useEffect(() => {

    fetchIngredients();
  }, [])

  return (
    <div id="ingredients-page">
      <section className='flex-row-center-y'>
        <h1 className='text-black text-large'>Ingredients</h1>
        <div className='flex-pull-right'>
          <button className="button-green button-small" onClick={ () => setIsPopupOpen(true) }>+ New Ingredient</button>
        </div>
      </section>

      <Popup 
        title='Create a New Ingredient'
        description='Configure the ingredient below.'
        isOpen={ isPopupOpen }
        onCancel={ () => setIsPopupOpen(false) }
        onFinish={ () => createIngredient() }
      >
        <form>
          <ul className="ul">
            <li className="input">
              <label htmlFor="ingredient-name">Name</label>
              <input 
                type="text" 
                name="ingredient-name" 
                value={ newName }
                onChange={ (e) => setNewName(e.target.value) }  
              />
            </li>

            <li className="input">
              <label htmlFor="meal-description">Unit</label>
              <Select 
                options={measures} 
                onChange={ (e: any) => setNewUnit(parseInt(e.value)) } 
              />
            </li>
          </ul>
        </form>
      </Popup>
    </div>
  );
}