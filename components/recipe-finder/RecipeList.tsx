import React, {useEffect, useState} from 'react';
import RecipeListItem from "./RecipeListItem";
import {Recipe} from "../../types/recipe";
import {theme, styled} from "../../stitches.config";
import {useFetch} from "use-http";
import RecipeListItemSkeleton from "./RecipeListItemSkeleton";

type RecipeListProps = {
    ingredients: string[]
}

const RecipeList = styled((props: RecipeListProps) => {
    const { ingredients, ...otherProps } = props;
    let [recipes, setRecipes] = useState<Recipe[]>([]);
    let { loading, error, response, abort, get } = useFetch('/api');
    
    useEffect(() => {
        const loadRecipes = async () => {
            abort();
            let results = await get(`recipes?ingredients=${ingredients.join(',')}`);
            if(response.ok) {
                setRecipes(results);
            }
        } 
        
        loadRecipes();
    }, [ingredients]);
    
    if(error) {
        return <div>Whoops! Something went wrong</div>;
    }
    
    if(loading) {
        let loadingPlaceholders = [];
        for(let i = 0; i < 12; i++) {   
            loadingPlaceholders.push(<RecipeListItemSkeleton key={i}/>);
        }
        return (
            <div {...otherProps}>
                {loadingPlaceholders}
            </div>);
    }
    
    if(!loading) {
        if(recipes.length === 0) {
            return (
                <div>No recipes found</div>
            )
        }
        return (
            <div {...otherProps}>
                {recipes.map(recipe => <RecipeListItem key={recipe.id} recipe={recipe} ingredientsSearched={ingredients.length}/>)}
            </div>
        )
    }
}, {
    display: 'grid',
    gridTemplateColumns: '1fr',
    rowGap: theme.space[6],
    columnGap: theme.space[4],
    '@media (min-width: 600px)': {
        gridTemplateColumns: '1fr 1fr'
    },
    '@media (min-width: 1080px)': {
        gridTemplateColumns: '1fr 1fr 1fr'
    }
});

export default RecipeList;