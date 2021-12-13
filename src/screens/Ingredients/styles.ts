import styled from 'styled-components/native';
import { FlatList, FlatListProps } from 'react-native';

interface IngredientProps{
  id: string;
  image: string;
  title: string;
  quantity: string;
}

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

export const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
`;

export const IngredientListWrapper = styled.View`
  margin: 0 10px;
  margin-top: 15px;
`;

export const IngredientList = styled(
  FlatList as new (props: FlatListProps<IngredientProps>) => FlatList<IngredientProps>
)``;
