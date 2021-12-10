import React from 'react';
import { StatusBar } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import {
   Container,
   Header,
   Title,
   IngredientList
} from './styles';

import { FoodProps } from '../../interface/FoodProps';

import { IngredientCard } from '../../components/IngredientCard';

interface Params {
   food: FoodProps;
}

interface IngredientsProps {
   navigation: NativeStackNavigationProp<any, any>;
}

export function Ingredients({ navigation }: IngredientsProps){
   navigation = useNavigation();
   const route = useRoute()
   const { food } = route.params as Params;
   const DATA = food.ingredients;

   function handleGoBack(){
      navigation.goBack();
  }

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
         showsVerticalScrollIndicator={false}
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