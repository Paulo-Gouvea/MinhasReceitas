import React from 'react';

import {
    Container,
    Wrapper,
    RecipeList,
} from './styles';

import { Recipe } from '../../components/Recipe';

export function Home(){
    const DATA = [
        {
            id: "1",
            image: "https://www.cozinhatecnica.com/wp-content/uploads/2020/03/cookies.jpg",
            title: "Cookies com gotas de chocolate",
            category: "Cookies"
        },
        {
            id: "2",
            image: "https://receitas.ninja/wp-content/uploads/2021/08/torta-alema-728x437.jpg",
            title: "Torta Holandesa",
            category: "Tortas"
        },
        {
            id: "3",
            image: "https://www.cozinhatecnica.com/wp-content/uploads/2020/03/cookies.jpg",
            title: "Cookies com gotas de chocolate",
            category: "Cookies"
        },
        {
            id: "4",
            image: "https://receitas.ninja/wp-content/uploads/2021/08/torta-alema-728x437.jpg",
            title: "Torta Holandesa",
            category: "Tortas"
        },
        {
            id: "5",
            image: "https://www.cozinhatecnica.com/wp-content/uploads/2020/03/cookies.jpg",
            title: "Cookies com gotas de chocolate",
            category: "Cookies"
        },
        {
            id: "6",
            image: "https://receitas.ninja/wp-content/uploads/2021/08/torta-alema-728x437.jpg",
            title: "Torta Holandesa",
            category: "Tortas"
        },
        {
            id: "7",
            image: "https://www.cozinhatecnica.com/wp-content/uploads/2020/03/cookies.jpg",
            title: "Cookies com gotas de chocolate",
            category: "Cookies"
        },
        {
            id: "8",
            image: "https://receitas.ninja/wp-content/uploads/2021/08/torta-alema-728x437.jpg",
            title: "Torta Holandesa",
            category: "Tortas"
        },
        {
            id: "9",
            image: "https://www.cozinhatecnica.com/wp-content/uploads/2020/03/cookies.jpg",
            title: "Cookies com gotas de chocolate",
            category: "Cookies"
        },
        {
            id: "10",
            image: "https://receitas.ninja/wp-content/uploads/2021/08/torta-alema-728x437.jpg",
            title: "Torta Holandesa",
            category: "Tortas"
        }
    ];

    return (
        <Container>
            <Wrapper>
                <RecipeList
                    data={DATA}
                    keyExtractor={(item)=> item.id}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    renderItem={({item})=> (
                        <Recipe 
                            data={item}
                        />
                    )}
                />
            </Wrapper>
        </Container>
    );
}