import React from 'react';

import * as S from './styles';

// interface Props {
//   title: string;
//   amount: string;

// }

const TransactionCard = () => {
  return (
    <S.Container>
      <S.Title>Desenvolvimento de site</S.Title>
      <S.Amount>R$12.000,00</S.Amount>

      <S.Footer>
        <S.Category>
          <S.Icon name="dollar-sign" />
          <S.CategoryName>Vendas</S.CategoryName>
        </S.Category>

        <S.Date>15/09/2020</S.Date>
      </S.Footer>
    </S.Container>
  );
};

export default TransactionCard;
