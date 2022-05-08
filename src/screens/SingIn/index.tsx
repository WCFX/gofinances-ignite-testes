import React, { useState } from 'react';
import { ActivityIndicator, Alert } from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';

import * as S from './styles';

import AppleSvg from '../../assets/apple.svg';
import GoogleSvg from '../../assets/google.svg';
import LogoSvg from '../../assets/logo.svg';
import { SingInSocialButton } from '../../components';
import { useAuth } from '../../hooks/auth';

const SingIn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { singInWithGoogle, singInWithApple } = useAuth();

  const theme = useTheme();

  async function handleSingInWithGoogle() {
    try {
      setIsLoading(true);
      return await singInWithGoogle();
    } catch (error) {
      console.log(error);
      Alert.alert('Não foi possivel conectar com a conta Google.');
      setIsLoading(false);
    }
  }

  async function handleSingInWithApple() {
    try {
      setIsLoading(true);
      return await singInWithApple();
    } catch (error) {
      console.log(error);
      Alert.alert('Não foi possivel conectar com a conta Apple.');
      setIsLoading(false);
    }
  }

  return (
    <S.Container>
      <S.Header>
        <S.TitleWrapper>
          <LogoSvg width={RFValue(120)} height={RFValue(68)} />

          <S.Title>
            Controle suas {'\n'}
            finanças de forma {'\n'}
            muito simples.
          </S.Title>
        </S.TitleWrapper>
        <S.SingInTitle>
          Faça seu login com {'\n'}
          uma das contas abaixo.
        </S.SingInTitle>
      </S.Header>
      <S.Footer>
        <S.FooterWrapper>
          <SingInSocialButton
            title="Entrar com Google"
            svg={GoogleSvg}
            // eslint-disable-next-line react/jsx-no-bind
            onPress={handleSingInWithGoogle}
          />
          <SingInSocialButton
            title="Entrar com Apple"
            svg={AppleSvg}
            // eslint-disable-next-line react/jsx-no-bind
            onPress={handleSingInWithApple}
          />
        </S.FooterWrapper>
        {isLoading && (
          <ActivityIndicator
            color={theme.colors.shape}
            style={{ marginTop: 18 }}
          />
        )}
      </S.Footer>
    </S.Container>
  );
};

export default SingIn;
