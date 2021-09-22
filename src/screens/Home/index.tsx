import React from "react";

import * as S from "./styles";

import { HightlightCard } from "../../components";

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
          <S.Icon name="power" />
        </S.UserWrapper>
      </S.Header>

      <S.HightlightCards>
        <HightlightCard
          type="up"
          title="Entradas"
          amount="R$17.400,00"
          lastTransaction="Ultima entrada dia 15 de setembro."
        />
        <HightlightCard
          type="down"
          title="Saidas"
          amount="R$4.400,00"
          lastTransaction="Ultima saída dia 19 de setembro."
        />
        <HightlightCard
          type="total"
          title="Total"
          amount="R$13.400,00"
          lastTransaction="01 á 30 setembro."
        />
      </S.HightlightCards>

      <S.Transactions>
        <S.Title>Listagem</S.Title>
      </S.Transactions>
    </S.Container>
  );
};

export default Home;
