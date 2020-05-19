import React, { useState } from "react";

import * as S from "./styled";

import Logo from "../../components/Logo";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <S.HeaderWrapper>
        <Logo />
      </S.HeaderWrapper>
      <S.LoginContent>
        <S.Form>
          <S.Title>Entrar</S.Title>
          <S.Input
            type="text"
            placeholder="E-mail"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <S.Input
            type="password"
            autoComplete="off"
            placeholder="Senha"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <S.Link href="/recuperar">Esqueceu sua senha?</S.Link>
          <S.Button type="submit">Entrar</S.Button>
          <S.Link href="/cadastro">Não tem conta? Crie uma!</S.Link>
        </S.Form>
      </S.LoginContent>
    </>
  );
};

export default Login;
