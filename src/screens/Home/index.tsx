import React, { useState, useEffect, useCallback } from 'react';
import { ActivityIndicator } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { useTheme } from 'styled-components';

import * as S from './styles';

import { HightligthCard, TransactionCard } from '../../components';
import { TransactionCardProps } from '../../components/TransactionCard';

export interface DataListProps extends TransactionCardProps {
  id: string;
}
interface HightlightProps {
  amount: string;
  lastTransaction: string;
}

interface HightlightData {
  entries: HightlightProps;
  expensive: HightlightProps;
  total: HightlightProps;
}

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [transactions, setTransactions] = useState<DataListProps[]>([]);
  const [hightlightData, setHightlightData] = useState<HightlightData>(
    {} as HightlightData,
  );
  const theme = useTheme();

  function getLastTransactionDate(
    collection: DataListProps[],
    type: 'positive' | 'negative',
  ) {
    const lastTransation = new Date(
      Math.max.apply(
        Math,
        collection
          .filter((transaction) => transaction.type === type)
          .map((transaction) => new Date(transaction.date).getTime()),
      ),
    );

    return `${lastTransation.getDate()} de ${lastTransation.toLocaleString(
      'pt-BR',
      { month: 'long' },
    )}`;
  }

  async function loadTransactions() {
    const dataKey = '@gofinances:transactions';
    const response = await AsyncStorage.getItem(dataKey);

    const transactions = response ? JSON.parse(response) : [];

    let entriesTotal = 0;
    let expensiveTotal = 0;

    const transactionsFormatted: DataListProps[] = transactions.map(
      (item: DataListProps) => {
        if (item.type === 'positive') {
          entriesTotal += Number(item.amount);
        } else {
          expensiveTotal += Number(item.amount);
        }

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

    setTransactions(transactionsFormatted);

    const lastTransactionEntries = getLastTransactionDate(
      transactions,
      'positive',
    );
    const lastTransactionExpensives = getLastTransactionDate(
      transactions,
      'negative',
    );

    const totalInterval = `01 á ${lastTransactionExpensives}`;

    const total = entriesTotal - expensiveTotal;

    setHightlightData({
      entries: {
        amount: entriesTotal.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }),
        lastTransaction: `Última entrada dia ${lastTransactionEntries}`,
      },
      expensive: {
        amount: expensiveTotal.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }),
        lastTransaction: `Última saída dia ${lastTransactionEntries}`,
      },
      total: {
        amount: total.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }),
        lastTransaction: totalInterval,
      },
    });
    setIsLoading(false);
  }

  useEffect(() => {
    loadTransactions();
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadTransactions();
    }, []),
  );

  return (
    <S.Container>
      {isLoading ? (
        <S.LoadContainer>
          <ActivityIndicator size="large" color={theme.colors.primary} />
        </S.LoadContainer>
      ) : (
        <>
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
            <HightligthCard
              type="up"
              title="Entradas"
              amount={hightlightData.entries.amount}
              lastTransaction={hightlightData.entries.lastTransaction}
            />
            <HightligthCard
              type="down"
              title="Saidas"
              amount={hightlightData.expensive.amount}
              lastTransaction={hightlightData.expensive.lastTransaction}
            />
            <HightligthCard
              type="total"
              title="Total"
              amount={hightlightData.total.amount}
              lastTransaction={hightlightData.total.lastTransaction}
            />
          </S.HightlightCards>

          <S.Transactions>
            <S.Title>Listagem</S.Title>
            <S.TransactionList
              data={transactions}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <TransactionCard data={item} />}
            />
          </S.Transactions>
        </>
      )}
    </S.Container>
  );
};

export default Home;
