import React, { useState } from 'react';
import { Modal } from 'react-native';

import * as S from './styles';

import Button from '../../components/Forms/Button';
import CardSelectButton from '../../components/Forms/CardSelectButton';
import Input from '../../components/Forms/Input';
import TransactionTypeButton from '../../components/Forms/TransactionTypeButton';
import CategorySelect from '../CategorySelect';

const Register = () => {
  const [transactiontype, setTransactiontype] = useState('');
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);

  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria',
  });

  function handleTransactionsTypeSelect(type: 'up' | 'down') {
    setTransactiontype(type);
  }

  function handleOpenSelectCategoryModal() {
    setCategoryModalOpen(true);
  }

  function handleCloseSelectCategoryModal() {
    setCategoryModalOpen(false);
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

          <CardSelectButton
            title="Categoria"
            onPress={handleOpenSelectCategoryModal}
          />
        </S.Fields>

        <Button title="Enviar" />
      </S.Form>
      <Modal visible={categoryModalOpen}>
        <CategorySelect
          category={category}
          setCategory={setCategory}
          closeSelectCategory={handleCloseSelectCategoryModal}
        />
      </Modal>
    </S.Container>
  );
};

export default Register;
