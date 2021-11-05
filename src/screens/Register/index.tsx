import React, { useState } from 'react';
import { Modal } from 'react-native';

import { useForm } from 'react-hook-form';

import * as S from './styles';

import Button from '../../components/Forms/Button';
import CardSelectButton from '../../components/Forms/CardSelectButton';
import Input from '../../components/Forms/Input';
import InputForm from '../../components/Forms/InputForm';
import TransactionTypeButton from '../../components/Forms/TransactionTypeButton';
import CategorySelect from '../CategorySelect';

interface FormData {
  name: string;
  amount: string;
}

const Register = () => {
  const [transactiontype, setTransactiontype] = useState('');
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);

  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria',
  });

  const { control, handleSubmit } = useForm();

  function handleTransactionsTypeSelect(type: 'up' | 'down') {
    setTransactiontype(type);
  }

  function handleOpenSelectCategoryModal() {
    setCategoryModalOpen(true);
  }

  function handleCloseSelectCategoryModal() {
    setCategoryModalOpen(false);
  }

  function handleRegister(form: FormData) {
    const data = {
      name: form.name,
      amount: form.amount,
      transactiontype,
      category: category.key,
    };

    console.log(form);
  }

  return (
    <S.Container>
      <S.Header>
        <S.Title>Cadastro</S.Title>
      </S.Header>
      <S.Form>
        <S.Fields>
          <InputForm name="name" control={control} placeholder=" Nome" />
          <InputForm name="amount" control={control} placeholder="Preço" />
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
            title={category.name}
            onPress={handleOpenSelectCategoryModal}
          />
        </S.Fields>

        <Button title="Enviar" onPress={handleSubmit(handleRegister)} />
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
