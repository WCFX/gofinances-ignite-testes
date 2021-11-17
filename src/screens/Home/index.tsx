import React, { useState, useEffect } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import * as S from './styles';

import { HightlightCard, TransactionCard } from '../../components';
import { TransactionCardProps } from '../../components/TransactionCard';

export interface DataListProps extends TransactionCardProps {
  id: string;
}

const Home = () => {
  const [data, setData] = useState<DataListProps[]>([]);

  async function loadTransactions() {
    const dataKey = '@gofinances:transactions';
    const response = await AsyncStorage.getItem(dataKey);

    const transactions = response ? JSON.parse(response) : [];

    const transactionsFormatted: DataListProps[] = transactions.map(
      (item: DataListProps) => {
        const amount = Number(item.amount).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        });

        const date = Intl.DateTimeFormat('pt-BR', {
          day: '2-digit',
          month: '2-digit',
          year: '2-digit',
        }).format(new Date(item.date));

        return {
          id: item.id,
          name: item.name,
          amount,
          type: item.type,
          category: item.category,
          date,
        };
      },
    );

    setData(transactionsFormatted);
  }

  useEffect(() => {
    loadTransactions();
  }, []);

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
          <S.LogoutButton
            onPress={() => {
              console.log('hellow');
            }}
          >
            <S.Icon name="power" />
          </S.LogoutButton>
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
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </S.Transactions>
    </S.Container>
  );
};

export default Home;
