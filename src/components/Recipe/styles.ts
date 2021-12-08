import styled from 'styled-components/native';

export const Container = styled.View`
    width: 150px;
    height: 225px;

    align-items: center;
    justify-content: space-between;

    margin: 10px;
    border: 1px solid black;
    border-radius: 8px;
`;

export const RecipeWrapper = styled.View`
    width: 100%;
    height: 70%;

    align-items: center;
`;

export const RecipeImage = styled.Image`
    width: 100%;
    height: 100%;
    
    margin: 0;
`;

export const RecipeTitle = styled.Text`
    font-weight: bold;
    text-align: center;
`;

export const RecipeCategory = styled.Text``;