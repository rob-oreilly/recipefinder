import React, {useEffect, useState} from 'react';
import {styled} from "@stitches/react";
import {Ingredient} from "../../types/ingredient";
import {useFetch} from "use-http";
import {theme} from "../../stitches.config";

type IngredientFilterProps = {
    onIngredientsChanged: (listOfIngredients: string[]) => void;
}

type IngredientSelect = Ingredient & {
    selected: boolean
}

const IngredientFilter = styled((props: IngredientFilterProps) => {
    let { onIngredientsChanged, ...otherProps } = props;
    let { response, get } = useFetch('/api');
    let [ingredients, setIngredients] = useState<IngredientSelect[]>([]);
    
    useEffect(() => {
        const loadIngredients = async () => {
            const result = await get('/ingredients');
            if(response.ok) setIngredients(result.map((i: IngredientSelect) => {
                i.selected = false;
                return i;
            }));
        } 
        loadIngredients();
    }, []);
    
    const handleIngredientChange = (ingredient: IngredientSelect, selected: boolean) => {
        let state = ingredients.map(i => {
            if(i.name === ingredient.name) i.selected = selected;
            return i;
        });
        setIngredients(state);
        onIngredientsChanged(state.filter(i => i.selected).map(i => i.name));
    }
    
    return (
        <div {...otherProps}>
            <h3 className="title">Ingredients</h3>
            {ingredients.map(ingredient => <IngredientFilterItem key={ingredient.name} ingredient={ingredient} onChange={handleIngredientChange}/>)}
        </div>
    );
}, {
    backgroundColor: theme.colors.slate1,
    boxShadow: theme.shadows[4],
    borderRadius: theme.radii[3],
    padding: theme.space[5],
    '& .title': {
        marginTop: theme.space[1],
        marginBottom: theme.space[4]
    }
});

const IngredientFilterItem = styled((props: any) => {
    let { ingredient, onChange, ...otherProps } = props;
    
    const handleSelected = () => {
        onChange(ingredient, !ingredient.selected);
    }
    
    return <div {...otherProps}>
        <input type="checkbox" onChange={handleSelected} checked={ingredient.selected} className="checkbox"/>{ingredient.name}</div>
}, {
    lineHeight: theme.space[6],
    '& .checkbox': {
        marginRight: theme.space[4],
        accentColor: theme.colors.slate12,
        width: theme.space[4],
        height: theme.space[4]
    }
});

export default IngredientFilter;