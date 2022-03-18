import type { NextApiRequest, NextApiResponse } from 'next'
import {Recipe} from "../../types/recipe";


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Recipe[]>
) {
    let { ingredients } = req.query;
    if(ingredients) {
        let response = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=d4c54f57b199472eba75147176c74591&number=12&ingredients=${ingredients}`);
        let data = await response.json();
        res.status(200).json(data);
    } else {
        let response = await fetch('https://api.spoonacular.com/recipes/random?apiKey=d4c54f57b199472eba75147176c74591&number=12');
        let data = await response.json();
        res.status(200).json(data.recipes);
    }
}
