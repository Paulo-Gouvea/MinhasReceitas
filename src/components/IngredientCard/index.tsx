import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import {
 Container,
 IngredientImage,
 IngredientTitle,
 IngredientQuantity,
} from './styles';

interface IngredientCardProps extends RectButtonProps {
    image: string;
    title: string;
    quantity: string;
}

export function IngredientCard({
    image,
    title, 
    quantity,
    ...rest
}: IngredientCardProps){
   return (
    <Container
        {...rest}
    >
        <IngredientImage
            source={{ uri: image }}
        />
        <IngredientTitle>{title}</IngredientTitle>
        <IngredientQuantity>{quantity}</IngredientQuantity>
    </Container>
   );
}