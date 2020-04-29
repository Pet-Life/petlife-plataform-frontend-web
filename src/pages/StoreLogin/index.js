import React from "react";

import * as S from "./styled";

import Logo from "../../components/Logo";
import Footer from "../../components/Footer";

const StoreLogin = () => {
  return (
    <>
      <S.HeaderWrapper>
        <Logo />
      </S.HeaderWrapper>
      <S.LoginWrapper>
        <S.Form>
          <S.TitleForm>Gerencie seu Pet Shop</S.TitleForm>
          <S.Input type="email" placeholder="Seu e-mail" />
          <S.Input type="senha" placeholder="Sua senha" />
          <S.Link href="#">Esqueceu sua senha?</S.Link>
          <S.ButtonRegister type="submit">Entrar</S.ButtonRegister>
          <S.Link href="/petshop/cadastro">
            Ainda não possui cadastro? Cadastre seu Pet Shop
          </S.Link>
        </S.Form>
      </S.LoginWrapper>
      <Footer />
    </>
  );
};

export default StoreLogin;
