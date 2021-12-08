import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 120px;
  height: 180px;

  align-items: center;
  background-color: #FFFFFF;

  margin: 10px 5px;
`;

export const IngredientImage = styled.Image`
    width: 100%;
    height: 57%;
`;

export const IngredientTitle = styled.Text`
    font-weight: bold;
    font-size: 14px;
    text-align: center;
`;

export const IngredientQuantity = styled.Text`
    font-size: 10px;
    color: grey;
    text-align: center;
`;