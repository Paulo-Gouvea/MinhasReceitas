import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #f5f5f5;
`;

export const Wrapper = styled.View`
    position: absolute;

    width: 90%;
    height: 50px;

    margin-top: 50px;
`;

export const IconContainer = styled(RectButton)`
    height: 100%;
    width: 50px;

    align-items: center;
    justify-content: center;
`;

export const RecipeImage = styled.Image`
    width: 100%;
    height: 30%;
`;

export const Content = styled.View`
    align-items: center;

    padding-top: 30px;
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

    margin: 10px 0 20px 0;
`;

export const PreparationText = styled.Text`
    font-weight: bold;
    margin-left: 6px;
`;

export const Direction = styled.View`
    height: 45%;

    margin-top: 30px;
`;

export const DirectionContainer = styled.View`
    flex-direction: row;
    align-items: flex-start;
`;

export const DirectionText = styled.Text`
    margin-top: -6px;
    margin-bottom: 20px;
    margin-left: 10px;

    font-size: 15px;
    font-weight: bold;
`;