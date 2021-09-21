import React from 'react';

import * as S from './styles';

interface Props {
  title: string;
  amount: string;
  lastTransaction: string;
  type: 'up' | 'down' | 'total'
}

const icon = {
  up: "arrow-up-circle",
  down: "arrow-down-circle",
  total: "dollar-sign"
}

const HighlightCard = ({type, title, amount, lastTransaction} : Props) => {
  return (
    <S.Container>
      <S.Header>
        <S.Title>{title}</S.Title>
        <S.Icon name={icon[type]}/>
      </S.Header>
      
      <S.Footer>
        <S.Amount>{amount}</S.Amount>
        <S.LastTransaction>{ lastTransaction }</S.LastTransaction>
      </S.Footer>
    </S.Container>
  )
}


export default HighlightCard;