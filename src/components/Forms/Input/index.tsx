import React from 'react';
import { TextInputProps } from 'react-native';

import * as S from './styles';

export interface Props extends TextInputProps {
  active: boolean;
}

const Input = ({ active, ...rest }: Props) => {
  return <S.Container active={active} {...rest} />;
};

export default Input;
