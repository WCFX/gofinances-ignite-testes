import React from 'react';

import { RectButtonProps } from 'react-native-gesture-handler';

import * as S from './styles';

const icons = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
};

interface Props extends RectButtonProps {
  title: string;
  type: 'up' | 'down';
  isActive: boolean;
}

const TransactionTypeButton = ({ title, type, isActive, ...rest }: Props) => {
  return (
    <S.Container isActive={isActive} type={type}>
      <S.Buttom {...rest}>
        <S.Icon name={icons[type]} type={type} />
        <S.Title>{title}</S.Title>
      </S.Buttom>
    </S.Container>
  );
};

export default TransactionTypeButton;
