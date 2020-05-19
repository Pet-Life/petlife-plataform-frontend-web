import React, { useState } from "react";

import * as S from "./styled";

import Logo from "../../components/Logo";

const Register = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <S.HeaderWrapper>
        <Logo />
      </S.HeaderWrapper>
      <S.RegisterContent>
        <S.Form>
          <S.Title>Cadastra-se</S.Title>
          <S.Input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <S.Input
            type="text"
            placeholder="Sobrenome"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
          <S.Input
            type="email"
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
          <S.Button type="submit">Cadastrar</S.Button>
          <S.Link href="/entrar">Já tenho uma conta. Entrar</S.Link>
        </S.Form>
      </S.RegisterContent>
    </>
  );
};

export default Register;
