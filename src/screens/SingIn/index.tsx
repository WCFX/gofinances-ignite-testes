import React, { useContext } from 'react';

import { RFValue } from 'react-native-responsive-fontsize';

import * as S from './styles';

import AppleSvg from '../../assets/apple.svg';
import GoogleSvg from '../../assets/google.svg';
import LogoSvg from '../../assets/logo.svg';
import { SingInSocialButton } from '../../components';
import { useAuth } from '../../hooks/auth';

const SingIn = () => {
  const { user } = useAuth();

  return (
    <S.Container>
      <S.Header>
        <S.TitleWrapper>
          <LogoSvg width={RFValue(120)} heigth={RFValue(68)} />

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
          <SingInSocialButton title="Entrar com Google" svg={GoogleSvg} />
          <SingInSocialButton title="Entrar com Apple" svg={AppleSvg} />
        </S.FooterWrapper>
      </S.Footer>
    </S.Container>
  );
};

export default SingIn;
