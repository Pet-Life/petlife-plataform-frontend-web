import React from "react";

import * as S from "./styled";

import Logo from "../../components/Logo";

const Register = () => {
  return (
    <>
      <S.HeaderWrapper>
        <Logo />
      </S.HeaderWrapper>
      <S.RegisterContent>
        <S.Form>
          <S.Title>Cadastra-se</S.Title>
          <S.Input type="text" placeholder="Nome" />
          <S.Input type="text" placeholder="Sobrenome" />
          <S.Input type="email" placeholder="E-mail" />
          <S.Input type="password" placeholder="Senha" />
          <S.Button type="submit">Cadastrar</S.Button>
          <S.Link href="/entrar">Já tenho uma conta. Entrar</S.Link>
        </S.Form>
      </S.RegisterContent>
    </>
  );
};

export default Register;
