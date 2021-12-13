import styled from 'styled-components/native';
import { FlatList, FlatListProps } from 'react-native';

import { FoodProps } from '../../interface/FoodProps';

export const Container = styled.View`
  flex: 1;
  background-color: #f5f5f5;

  padding: 60px 0;
`;

export const Header = styled.View`
  width: 70%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TitleContainer = styled.View`
    height: 100%
    width: 50%;

    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;

  text-align: center;
`;

export const IngredientImage = styled.Image`
    width: 100%;
    height: 50%;
`;

export const RecipesWith = styled.Text`
    margin: 20px 0;
    margin-left: 15px;

    font-size: 18px;
    font-weight: bold;
`;

export const RecipeListWrapper = styled.View`
  width: 100%;
  height: 40%;

  align-items: center;
`;

export const RecipeList = styled(
  FlatList as new (props: FlatListProps<FoodProps>) => FlatList<FoodProps>
)``;