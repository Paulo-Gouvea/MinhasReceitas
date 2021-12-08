import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const RecipeImage = styled.Image`
    width: 100%;
    height: 40%;
`;

export const Content = styled.View`
    align-items: center;

    padding-top: 40px;
    width: 85%;
`

export const Title = styled.Text`
    font-size: 30px;
    font-weight: bold;
    text-align: center;

    margin-bottom: 20px;
`;

export const Category = styled.Text`
    color: #0CBAA6;
    font-size: 15px;
    font-weight: bold;
    text-transform: uppercase;
`

export const Preparation = styled.View`
    flex-direction: row;

    align-items: center;

    margin-top: 10px;
`;

export const PreparationText = styled.Text`
    font-weight: bold;
    margin-left: 6px;
`;

export const Direction = styled.View`
    height: 53%;
`;

export const DirectionText = styled.Text`

`;