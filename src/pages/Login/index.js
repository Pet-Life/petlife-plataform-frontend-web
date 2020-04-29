import React from "react";

import * as S from "./styled";

import Logo from "../../components/Logo";
import image from "../../assets/image-2.jpg";

const Login = () => {
  return (
    <S.LoginWrapper>
      <S.LoginContent>
        <Logo />
        <S.Image src={image} />
      </S.LoginContent>
      <S.LoginContent>
        <S.Form>
          <S.Title>Entrar</S.Title>
          <S.Input type="text" placeholder="E-mail" />
          <S.Input type="password" placeholder="Senha" />
          <S.Link href="/recuperar">Esqueceu sua senha?</S.Link>
          <S.Button type="submit">Entrar</S.Button>
          <S.Link href="/cadastro">Não tem conta? Crie uma!</S.Link>
        </S.Form>
      </S.LoginContent>
    </S.LoginWrapper>
  );
};

export default Login;
