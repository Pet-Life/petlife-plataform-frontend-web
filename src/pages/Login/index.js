import React from "react";

import * as S from "./styled";

import Logo from "../../components/Logo";

const Login = () => {
  return (
    <>
      <S.HeaderWrapper>
        <Logo />
      </S.HeaderWrapper>
      <S.LoginContent>
        <S.Form>
          <S.Title>Entrar</S.Title>
          <S.Input type="text" placeholder="E-mail" />
          <S.Input type="password" placeholder="Senha" />
          <S.Link href="/recuperar">Esqueceu sua senha?</S.Link>
          <S.Button type="submit">Entrar</S.Button>
          <S.Link href="/cadastro">Novo por aqui? Cadastre-se </S.Link>
        </S.Form>
      </S.LoginContent>
    </>
  );
};

export default Login;
