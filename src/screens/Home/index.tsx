import React from "react";
import { HightlightCard } from "../../components";


import * as S from "./styles";

const Home = () => {
  return (
    <S.Container>
      <S.Header>
        <S.UserWrapper>
        <S.UserInfo>
          <S.Photo
            source={{
              uri: "https://avatars.githubusercontent.com/u/74629427?v=4",
            }}
          />
          <S.User>
            <S.UserGreeting> Olá, </S.UserGreeting>

            <S.UserName>Cíntia Schirmann</S.UserName>
          </S.User>
          </S.UserInfo>
          <S.Icon name="power"/>
        </S.UserWrapper>
      </S.Header>

      <HightlightCard/>
      <HightlightCard/>
      <HightlightCard/>
    </S.Container>
  );
};

export default Home;
