import React from 'react';
import { StatusBar, ScrollView } from 'react-native';
import { Entypo, AntDesign, Ionicons } from '@expo/vector-icons';

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

import { recipes } from '../../utils/recipes';

import { Button } from '../../components/Button';

export function Recipe(){
    const cookie = recipes[0];

   return (
    <Container>
        <StatusBar
            translucent
            backgroundColor="transparent"
            barStyle="light-content"
        />
        <RecipeImage 
            source={{ uri: cookie.image}}
        />
        <Wrapper>
            <IconContainer
                onPress={()=> console.log("TESTELOL")}
            >
                <Ionicons
                    name="chevron-back-circle-outline"
                    size={50}
                    color={'#0CBAA6'}
                />
            </IconContainer>
        </Wrapper>
        <Content>
            <Title>{cookie.title}</Title>
            <Category>{cookie.category}</Category>
            <Preparation>
                <Entypo
                    name="stopwatch"
                    size={20}
                />
                <PreparationText>{cookie.preparationTime}</PreparationText>
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
                        cookie.directions.map((item)=> (
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