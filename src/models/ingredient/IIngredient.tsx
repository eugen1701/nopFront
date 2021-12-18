import { IMeasure } from "../measure/IMeasure";

export interface IIngredient {
  id?: number,
  name?: string,
  measure?: IMeasure,
  quantity?: number
}