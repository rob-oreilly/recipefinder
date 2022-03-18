import React from 'react';
import {Recipe} from "../../types/recipe";
import {theme, styled} from "../../stitches.config";

type RecipeListItemProps = {
    recipe: Recipe;
    ingredientsSearched: number;
}

const RecipeListItem = (props: RecipeListItemProps) => {
    let { recipe, ingredientsSearched } = props;

    return (
        <div>
                <RecipeImage src={recipe.image}/>
                <RecipeTitle href={"#"}>{recipe.title}</RecipeTitle>
                {recipe.usedIngredientCount && <IngredientsFound>{recipe.usedIngredientCount} / {ingredientsSearched} ingredients</IngredientsFound>}
        </div>
    )
}

const IngredientsFound = styled('div', {
    fontSize: theme.fontSizes.xs,
    color: theme.colors.slate10
})

const RecipeTitle = styled('a', {
    display: 'block',
    marginTop: theme.space["3"],
    fontSize: theme.fontSizes.md,
    lineHeight: 1,
    '&:hover' : {
        color: theme.colors.slate11
    }
});

const RecipeImage = styled('img', {
    width: '100%',
    height: 'auto',
    display: 'block',
    aspectRatio: '3 / 2',
    boxShadow: theme.shadows[2],
    borderRadius: theme.radii[3],
    transition: 'all 300ms ease',
    '&:hover': {
        transform: 'scale(103%)',
        boxShadow: theme.shadows[1],
        cursor: 'pointer'
    }
});

export default RecipeListItem;