import React from 'react';
import { StatusBar } from 'react-native';

import {
   Container,
   Header,
   Title,
   IngredientList
} from './styles';

import { recipes } from '../../utils/recipes';

import { IngredientCard } from '../../components/IngredientCard';

export function Ingredients(){
   const DATA = recipes[0].ingredients;
   return (
    <Container>
       <Header>
         <Title>Ingredientes</Title>
      </Header>
         <StatusBar
            translucent
            backgroundColor="transparent"
            barStyle="dark-content"
        />
       <IngredientList
         data={DATA}
         keyExtractor={(item) => item.id}
         numColumns={3}
         renderItem={({item})=> (
            <IngredientCard
               image={item.image}
               title={item.title}
               quantity={item.quantity}
               onPress={()=> console.log(item.title)}
            />
         )}
       />
    </Container>
   );
}

{/* 
   <IngredientCard 
image={data.image}
title={data.title}
quantity={data.quantity}
/> 

*/}