import styled from 'styled-components/native';
import { FlatList, FlatListProps } from 'react-native';

interface RecipeProps {
  id: string;
  image: string;
  title: string;
  category: string;
}

export const Container = styled.View`
  flex: 1;

  background-color: #f5f5f5;
  padding-top: 40px;
`;

export const Wrapper = styled.View`
  width: 100%;
  height: 100%;

  align-items: center;
`;

export const RecipeList = styled(
  FlatList as new (props: FlatListProps<RecipeProps>) => FlatList<RecipeProps>
)``;