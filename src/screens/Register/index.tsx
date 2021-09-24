import React, { useState } from 'react';

import * as S from './styles';

import Button from '../../components/Forms/Button';
import Input from '../../components/Forms/Input';
import TransactionTypeButton from '../../components/Forms/TransactionTypeButton';

const Register = () => {
  const [transactiontype, setTransactiontype] = useState('');

  function handleTransactionsTypeSelect(type: 'up' | 'down') {
    setTransactiontype(type);
  }

  return (
    <S.Container>
      <S.Header>
        <S.Title>Cadastro</S.Title>
      </S.Header>
      <S.Form>
        <S.Fields>
          <Input placeholder=" Nome" />
          <Input placeholder="Preço" />
          <S.TransactionsTypes>
            <TransactionTypeButton
              type="up"
              title="Income"
              onPress={() => handleTransactionsTypeSelect('up')}
              isActive={transactiontype === 'up'}
            />
            <TransactionTypeButton
              type="down"
              title="Outcome"
              onPress={() => handleTransactionsTypeSelect('down')}
              isActive={transactiontype === 'down'}
            />
          </S.TransactionsTypes>
        </S.Fields>

        <Button title="Enviar" />
      </S.Form>
    </S.Container>
  );
};

export default Register;
