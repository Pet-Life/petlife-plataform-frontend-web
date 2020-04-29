import React from "react";

import * as S from "./styled";

import Logo from "../../components/Logo";
import Footer from "../../components/Footer";

const StoreRegister = () => {
  return (
    <>
      <S.HeaderWrapper>
        <Logo />
        <S.Menu>
          <S.Link href="/petshop/entrar">Já sou parceiro</S.Link>
        </S.Menu>
      </S.HeaderWrapper>
      <S.MainWrapper>
        <S.Form>
          <S.TitleForm>Cadastrar meu Pet Shop</S.TitleForm>
          <S.Input type="text" placeholder="Nome do Pet Shop" />
          <S.Input type="text" placeholder="CNPJ" />
          <S.Input
            type="zipcode"
            placeholder="Informe o CEP de endereço do Pet Shop"
          />
          <S.Input type="email" placeholder="E-mail" />
          <S.Input type="password" placeholder="Senha" />
          <S.ButtonRegister type="submit">Realizar cadastro</S.ButtonRegister>
        </S.Form>
      </S.MainWrapper>
      <Footer />
    </>
  );
};

export default StoreRegister;
