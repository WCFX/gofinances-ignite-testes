import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import * as S from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
  onPress: () => void;
}

const Button = ({ title, onPress, ...rest }: Props) => {
  return (
    <S.Container onPress={onPress} {...rest}>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};

export default Button;
