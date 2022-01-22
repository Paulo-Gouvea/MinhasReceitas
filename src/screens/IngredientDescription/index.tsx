import React, { useEffect } from 'react';
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
import { IngredientProps } from '../../interface/IngredientProps';

import { GoBackButton } from '../../components/GoBackButton';
import { RecipeCard } from '../../components/RecipeCard';

interface Params {
    ingredient: IngredientProps;
}

interface IngredientDescriptionProps{
    navigation: NativeStackNavigationProp<any, any>;
}

export function IngredientDescription({ navigation }: IngredientDescriptionProps){
    navigation = useNavigation();
    const route = useRoute();
    const { ingredient } =  route.params as Params;

    const filteredRecipes = recipes.filter(
        recipe => recipe.ingredients.find(
            item => item.title === ingredient.title
        )
    )

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
            <Title>{ingredient.title}</Title>
        </TitleContainer>
      </Header>
         <StatusBar
            translucent
            backgroundColor="transparent"
            barStyle="dark-content"
        />
        <IngredientImage 
            source={{ uri: ingredient.image }}
            resizeMode='stretch'
        />
        <RecipesWith>{`Receitas com ${ingredient.title}:`}</RecipesWith>
        <RecipeListWrapper>
                <RecipeList
                    data={filteredRecipes}
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