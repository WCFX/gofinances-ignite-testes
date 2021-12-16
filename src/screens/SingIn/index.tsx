import React from 'react';
import { Alert } from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';

import * as S from './styles';

import AppleSvg from '../../assets/apple.svg';
import GoogleSvg from '../../assets/google.svg';
import LogoSvg from '../../assets/logo.svg';
import { SingInSocialButton } from '../../components';
import { useAuth } from '../../hooks/auth';

const SingIn = () => {
  const { singInWithGoogle } = useAuth();

  async function handleSingInWithGoogle() {
    try {
      await singInWithGoogle();
    } catch (error) {
      console.log(error);
      Alert.alert('não foi possivel conectar com a google');
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
            onPress={handleSingInWithGoogle}
          />
          <SingInSocialButton title="Entrar com Apple" svg={AppleSvg} />
        </S.FooterWrapper>
      </S.Footer>
    </S.Container>
  );
};

export default SingIn;
