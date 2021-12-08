import React from 'react';

import {
 Container,
 RecipeWrapper,
 RecipeImage,
 RecipeTitle,
 RecipeCategory,
} from './styles';

interface DataProps {
    image: string;
    title: string;
    category: string;
}

interface RecipeProps {
    data: DataProps
}

export function Recipe({
    data
}: RecipeProps){
   return (
        <Container>
            <RecipeWrapper>
                <RecipeImage
                    source={{ uri: data.image }}
                />
                <RecipeTitle>{ data.title }</RecipeTitle>  
            </RecipeWrapper>
            <RecipeCategory>{ data.category }</RecipeCategory>
        </Container>
   );
}