import React from 'react';
import { TextInputProps } from 'react-native';

import { Control, Controller } from 'react-hook-form';

import * as S from './styles';

import Input from '../Input';

interface Props extends TextInputProps {
  control: Control;
  name: string;
  error: string;
}

const InputForm = ({ control, name, error, ...rest }: Props) => {
  return (
    <S.Container>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => <Input {...rest} />}
        name={name}
      />
      {error && <S.Error>{error}</S.Error>}
    </S.Container>
  );
};

export default InputForm;
