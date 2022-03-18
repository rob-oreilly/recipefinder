import {Ingredient} from "./ingredient";

export type Recipe = {
    id: string;
    title: string;
    image: string;
    rating: number;
    ingredientsFound: number,
    nutrition: RecipeNutrition,
    usedIngredientCount: number | undefined
}

export type RecipeNutrition = {
    calories: number,
    fat: number,
    carbs: number,
    protein: number
}