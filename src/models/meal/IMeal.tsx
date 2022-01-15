export interface IMeal {
  mealId: string,
  name: string,
  kitchenId: string,
  description: string,
  kcal: 0,
  ingredients: [
    {
      mealId: string,
      ingredientId: string,
      quantity: 0
    }
  ]
}

export interface IIngredient {
  id: string,
  name: string,
  kitchenId: string,
  unit: string
}