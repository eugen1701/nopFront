import React, { useState, useEffect } from 'react';
import './IngredientsPage.scss';
import '../../assets/shared_sass/_styles.scss';
import { Popup } from '../../components/base/popup/Popup';
import Select from 'react-select';
import axios from 'axios';
import { IngredientCard } from '../../components/ingredient/IngredientCard';

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
  const [ingredients, setIngredients] = useState<any[]>([]);
  const config = {
    headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}
  };

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
    await axios.post('http://localhost:7768/api/Ingredient/Create', requestBody, config);
  
    fetchIngredients();
  }

  const fetchIngredients = async () => {
    console.log("asdasdasd");
    
    const response = await axios.get('http://localhost:7768/api/Ingredient/Get', config);
    setIngredients(response.data);
    console.log(`----- FETCH INGREDIENTS: ${JSON.stringify(response.data)}`)
  };

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

  function rendersIngredients() {
    const htmlIngredientsList = ingredients.map(ingredient => (
      <li key={ingredient.id}>
        <IngredientCard 
          name={ingredient.name}
          unit={unitIdToName(ingredient.unit)}
        />
      </li>
    ))

    return htmlIngredientsList
  }

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

      <ul id="meals-page__meals-container" className='ul grid-4-columns'>
        { rendersIngredients() }
      </ul>

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