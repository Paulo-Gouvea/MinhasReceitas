import styled from 'styled-components/native';
import { FlatList, FlatListProps } from 'react-native';

import { FoodProps } from '../../interface/FoodProps';

export const Container = styled.View`
  flex: 1;

  background-color: #f5f5f5;
  padding: 45px 0px;

  align-items: center;
`;

export const Title = styled.Text`
  font-size: 25px;
`;

export const RecipeListWrapper = styled.View`
  width: 100%;
  height: 100%;

  align-items: center;
`;

export const RecipeList = styled(
  FlatList as new (props: FlatListProps<FoodProps>) => FlatList<FoodProps>
)``;