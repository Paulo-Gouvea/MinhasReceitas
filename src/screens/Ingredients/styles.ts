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

  align-items: center;
  justify-content: center;

  padding: 60px 0;
`;

export const Header = styled.View`
  width: 100%;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
`;

export const IngredientList = styled(
  FlatList as new (props: FlatListProps<IngredientProps>) => FlatList<IngredientProps>
)``;