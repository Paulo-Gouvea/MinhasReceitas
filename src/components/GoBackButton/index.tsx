import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { RectButtonProps } from 'react-native-gesture-handler';

import {
 Container,
 Title,
} from './styles';

interface GoBackButtonProps extends RectButtonProps {
   title: string;
}

export function GoBackButton({
   title,
   ...rest
}: GoBackButtonProps){
   return (
    <Container
      { ...rest }
    >
      <Ionicons
         name="chevron-back"
         size={42}
         color="#508BF7"
      />
      <Title>{title}</Title>
    </Container>
   );
}