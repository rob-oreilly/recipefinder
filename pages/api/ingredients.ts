import type { NextApiRequest, NextApiResponse } from 'next'
import {Ingredient} from "../../types/ingredient";


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Ingredient[]>
) {
  res.status(200)
      .json([
        { name: 'Apples'},
        { name: 'Banana'},
        { name: 'Beef'},
        { name: 'Carrot'},
        { name: 'Cheese' },
        { name: 'Chicken'},
        { name: 'Fish'},
        { name: 'Lamb'},
        { name: 'Lentils' },
        { name: 'Pasta'}, 
        { name: 'Potatoes'},
        { name: 'Prawns'},
        { name: 'Pumpkin'},
        { name: 'Sweet Potato'},
        { name: 'Tomato'},
          
      ]);
}
