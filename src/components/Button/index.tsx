import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import {
 Container,
 Wrapper,
 Title
} from './styles';

interface ButtonProps extends RectButtonProps{
    title: string;
}

export function Button({
    title,
    ...rest
}: ButtonProps){
   return (
    <Container>
        <Wrapper
            {...rest}
        >
            <Title>
                {title}
            </Title>
        </Wrapper>
    </Container>
   );
}