import { TextInput } from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

import { Props } from '.';

export const Container = styled(TextInput)<Props>`
  width: 100%;
  padding: 16px 18px;

  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text_dark};
  background-color: ${({ theme }) => theme.colors.shape};

  margin-top: 10px;
  border-radius: 15px;
  margin-bottom: 8px;

  ${({ active, theme }) =>
    active &&
    css`
      border-color: ${theme.colors.attention};
      border-width: 3px;
    `}
`;
