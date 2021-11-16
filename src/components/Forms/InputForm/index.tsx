import React from 'react';
import { TextInputProps } from 'react-native';

import { Control, Controller } from 'react-hook-form';

import * as S from './styles';

import Input from '../Input';

export interface Props extends TextInputProps {
  control: Control;
  name: string;
  error: string;
}

const InputForm = ({ error, control, name, ...rest }: Props) => {
  return (
    <S.Container>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <Input onChangeText={onChange} value={value} {...rest} />
        )}
      />
      {error && <S.Error>{error}</S.Error>}
    </S.Container>
  );
};

export default InputForm;
