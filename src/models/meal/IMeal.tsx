import { IIngredient } from "../ingredient/IIngredient";

export interface IMeal {
  title: string,
  description: string,
  ingredients: Array<IIngredient>
}