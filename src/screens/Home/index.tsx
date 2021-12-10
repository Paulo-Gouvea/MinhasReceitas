import React from 'react';
import { StatusBar } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import {
    Container,
    Title,
    Wrapper,
    RecipeList,
} from './styles';

import { recipes } from '../../utils/recipes';
import { FoodProps } from '../../interface/FoodProps';

import { RecipeCard } from '../../components/RecipeCard';

interface HomeProps {
    navigation: NativeStackNavigationProp<any, any>;
}

export function Home({ navigation }: HomeProps){
    navigation = useNavigation();

    function handleRecipeScreen(food: FoodProps){
        navigation.navigate("Recipe", { food });
    }

    return (
        <Container>
            <StatusBar
                translucent
                backgroundColor="transparent"
                barStyle="dark-content"
            />
            <Title>MINHAS RECEITAS</Title>
            <Wrapper>
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
            </Wrapper>
        </Container>
    );
}