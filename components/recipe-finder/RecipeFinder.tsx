import React, {useState} from 'react';
import {styled} from "@stitches/react";
import IngredientFilter from "./IngredientFilter";
import RecipeList from "./RecipeList";
import {theme} from "../../stitches.config";

type RecipeFinderProps = {
}

const RecipeFinder = styled((props: RecipeFinderProps) => {
    let { ...otherProps } = props
    let [ingredientsSelected, setIngredientsSelected] = useState<string[]>([]);
    
    const handleIngredientsChanged = (ingredients: string[]) => {
        setIngredientsSelected(ingredients);
    }
    
    return (
        <div {...otherProps}>
            <IngredientFilter onIngredientsChanged={handleIngredientsChanged}/>
            <RecipeList ingredients={ingredientsSelected}/>
        </div>);
}, {
    display: 'grid',
    gridTemplateColumns: '1fr 3fr',
    gap: theme.space[4]
});

export default RecipeFinder;