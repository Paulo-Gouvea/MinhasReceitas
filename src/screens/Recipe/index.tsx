import React from 'react';
import { StatusBar, ScrollView } from 'react-native';
import { Entypo, AntDesign, Ionicons } from '@expo/vector-icons';

import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import {
 Container,
 Wrapper,
 RecipeImage,
 Content,
 Title, 
 Category,
 Preparation,
 PreparationText,
 Direction,
 DirectionContainer,
 DirectionText,
 IconContainer,
} from './styles';

import { FoodProps } from '../../interface/FoodProps';

import { Button } from '../../components/Button';

interface Params{
    food: FoodProps;
}

interface RecipeProps {
    navigation: NativeStackNavigationProp<any, any>;
}

export function Recipe({ navigation }: RecipeProps){
    navigation = useNavigation();
    const route = useRoute();
    const { food } = route.params as Params;

    function HandleGoBack(){
        navigation.goBack();
    }

   return (
    <Container>
        <StatusBar
            translucent
            backgroundColor="transparent"
            barStyle="light-content"
        />
        <RecipeImage 
            source={{ uri: food.image}}
        />
        <Wrapper>
            <IconContainer
                onPress={HandleGoBack}
            >
                <Ionicons
                    name="chevron-back-circle-outline"
                    size={50}
                    color={'#0CBAA6'}
                />
            </IconContainer>
        </Wrapper>
        <Content>
            <Title>{food.title}</Title>
            <Category>{food.category}</Category>
            <Preparation>
                <Entypo
                    name="stopwatch"
                    size={20}
                />
                <PreparationText>{food.preparationTime}</PreparationText>
            </Preparation>

            <Button 
                title="Ver os ingredientes"
                onPress={() => console.log("Ver os ingredientes")}
            />

            <Direction>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={{paddingTop: 5}}
                >    
                    {
                        food.directions.map((item)=> (
                            <DirectionContainer
                                key={item}
                            >
                                <AntDesign
                                    name="arrowright"
                                    size={10}
                                />
                                <DirectionText>
                                    {item}
                                </DirectionText>
                            </DirectionContainer>
                        ))
                    }
                </ScrollView>
            </Direction>
        </Content>
    </Container>
   );
}