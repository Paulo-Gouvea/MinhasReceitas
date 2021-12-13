import React from 'react';
import { StatusBar } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import {
 Container,
 Header,
 TitleContainer,
 Title,
 IngredientImage,
 RecipesWith,
 RecipeListWrapper,
 RecipeList,
} from './styles';

import { recipes } from '../../utils/recipes';

import { FoodProps } from '../../interface/FoodProps';

import { GoBackButton } from '../../components/GoBackButton';
import { RecipeCard } from '../../components/RecipeCard';

interface IngredientDescriptionProps{
    navigation: NativeStackNavigationProp<any, any>;
}

export function IngredientDescription({ navigation }: IngredientDescriptionProps){
    navigation = useNavigation();

    function handleGoBack(){
        navigation.goBack();
    }

    function handleRecipeScreen(food: FoodProps){
        navigation.navigate("Recipe", { food });
    }

   return (
    <Container>
        <Header>
         <GoBackButton 
            title="Voltar"
            onPress={handleGoBack}
         />
         <TitleContainer>
            <Title>oleo</Title>
        </TitleContainer>
      </Header>
         <StatusBar
            translucent
            backgroundColor="transparent"
            barStyle="dark-content"
        />
        <IngredientImage 
            source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg2_MZDp7suKMriSGPW8UE4FNOtzs8wwnuZA&usqp=CAU" }}
            resizeMode='stretch'
        />
        <RecipesWith>Receitas com oleo:</RecipesWith>
        <RecipeListWrapper>
                <RecipeList
                    data={recipes}
                    keyExtractor={(item)=> item.id}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    renderItem={({item})=> (
                        <RecipeCard
                            data={item}
                            onPress={() => handleRecipeScreen(item)}
                        />
                    )}
                />
        </RecipeListWrapper>
    </Container>
   );
}