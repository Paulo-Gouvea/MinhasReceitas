import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    width: 300px;
    height: 60px;

    align-items: center;
    justify-content: center;

    border: 1px solid #0CBAA6;
    border-radius: 30px;
`;

export const Wrapper = styled(RectButton)`
    width: 90%;
    height: 85%;

    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    color: #0CBAA6;
`;