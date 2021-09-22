import React from 'react';

import * as S from './styles';

import { HightlightCard, TransactionCard } from '../../components';

const Home = () => {
  const data = [
    {
      title: 'Desenvolvimento de site',
      amount: 'R$12.000,00',
      category: { name: 'Vendas', icon: 'dollar-sign' },
      date: '15/09/2020',
    },
    {
      title: 'Burguer King',
      amount: 'R$130,00',
      category: { name: 'ALimentação', icon: 'dollar-sign' },
      date: '21/09/2020',
    },
    {
      title: 'Pizza Cia do Sabor',
      amount: 'R$160,00',
      category: { name: 'Alimentação', icon: 'dollar-sign' },
      date: '15/09/2020',
    },
  ];

  return (
    <S.Container>
      <S.Header>
        <S.UserWrapper>
          <S.UserInfo>
            <S.Photo
              source={{
                uri: 'https://avatars.githubusercontent.com/u/74629427?v=4',
              }}
            />
            <S.User>
              <S.UserGreeting> Olá, </S.UserGreeting>

              <S.UserName>Cíntia Schirmann</S.UserName>
            </S.User>
          </S.UserInfo>
          <S.Icon name="power" />
        </S.UserWrapper>
      </S.Header>

      <S.HightlightCards>
        <HightlightCard
          type="up"
          title="Entradas"
          amount="R$17.400,00"
          lastTransaction="Ultima entrada dia 15 de setembro."
        />
        <HightlightCard
          type="down"
          title="Saidas"
          amount="R$4.400,00"
          lastTransaction="Ultima saída dia 19 de setembro."
        />
        <HightlightCard
          type="total"
          title="Total"
          amount="R$13.400,00"
          lastTransaction="01 á 30 setembro."
        />
      </S.HightlightCards>

      <S.Transactions>
        <S.Title>Listagem</S.Title>
        <S.TransactionList
          data={data}
          renderItem={({ item }) => <TransactionCard data={item} />}
          showsVerticalScrollIndicator={false}
        />
      </S.Transactions>
    </S.Container>
  );
};

export default Home;
