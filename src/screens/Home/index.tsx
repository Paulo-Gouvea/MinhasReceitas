import React from 'react';
import { StatusBar } from 'react-native';

import {
    Container,
    Wrapper,
    RecipeList,
} from './styles';

import { recipes } from '../../utils/recipes';

import { RecipeCard } from '../../components/RecipeCard';

export function Home(){
    return (
        <Container>
            <StatusBar
                translucent
                backgroundColor="transparent"
                barStyle="dark-content"
            />
            <Wrapper>
                <RecipeList
                    data={recipes}
                    keyExtractor={(item)=> item.id}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    renderItem={({item})=> (
                        <RecipeCard
                            data={item}
                            onPress={()=> console.log(item.title)}
                        />
                    )}
                />
            </Wrapper>
        </Container>
    );
}