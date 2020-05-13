import React from "react";

import * as S from "./styled";

import Logo from "../../components/Logo";
import Footer from "../../components/Footer";

const PageNotFound = () => {
  return (
    <>
      <S.HeaderWrapper>
        <Logo />
        <S.Menu>
          <S.Link href="/">Voltar para home</S.Link>
        </S.Menu>
      </S.HeaderWrapper>
      <S.MainWrapper>
        <S.Title>
          Ops... Não foi encontrado o que você estava procurando
        </S.Title>
        <S.Link href="/">Volta para home</S.Link>
      </S.MainWrapper>
      <Footer />
    </>
  );
};

export default PageNotFound;
