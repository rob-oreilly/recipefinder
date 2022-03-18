import React from 'react';
import Skeleton from "react-loading-skeleton";
import {theme} from "../../stitches.config";

export default function RecipeListItemSkeleton() {
    return (
        <div>
            <Skeleton width="100%" style={{aspectRatio: '3/2', marginBottom: theme.space[2].value}} />
            <Skeleton count={2} height={theme.space[5].value} style={{marginBottom: theme.space[1].value}}/>
        </div>
    )
}