import React from 'react';
import { StatusBar, ScrollView } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import {
 Container,
 RecipeImage,
 Content,
 Title, 
 Category,
 Preparation,
 PreparationText,
 Direction,
 DirectionText
} from './styles';

import { recipes } from '../../utils/recipes';

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
            <Direction>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >    
                    {
                        cookie.directions.map((item)=> (
                            <DirectionText
                                key={item}
                            >
                                {item}
                            </DirectionText>
                        ))
                    }
                </ScrollView>
            </Direction>
        </Content>
    </Container>
   );
}