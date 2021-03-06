import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import {
 Container,
 RecipeWrapper,
 RecipeImage,
 RecipeTitle,
 RecipeCategory,
} from './styles';

import { FoodProps } from '../../interface/FoodProps';

interface RecipeProps extends RectButtonProps {
    data: FoodProps;
}

export function RecipeCard({
    data,
    ...rest
}: RecipeProps){
   return (
        <Container
            {...rest}
        >
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