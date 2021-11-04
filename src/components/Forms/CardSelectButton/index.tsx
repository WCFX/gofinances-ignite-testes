import React from 'react';

import * as S from './styles';

interface Props {
  title: string;
  onPress: () => void;
}

const CardSelectButton = ({ title, onPress }: Props) => {
  return (
    <S.Container onPress={onPress}>
      <S.Category>{title}</S.Category>
      <S.Icon name="chevron-down" />
    </S.Container>
  );
};

export default CardSelectButton;
