import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';


export const Container = styled.View`
flex: 1;
justify-content: center;
align-items: center;
background-color: ${({theme}) => theme.colors.background}
`;

export const Title = styled.Text`
color: #f11;
font-size: ${RFValue(15)}px;
`;