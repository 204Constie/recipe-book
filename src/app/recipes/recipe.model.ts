import { Ingredient } from '../shared/ingredient.model';
import {User} from "../user/user.model";

export class Recipe {
  public _id: number;
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingredient[];
  public user: User;

  constructor(_id: number, name: string, desc: string, imagePath: string, ingredients: Ingredient[]) {
    this._id = _id;
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
    this.user = null;
  }
}
