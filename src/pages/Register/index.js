import React, { useState } from "react";

import * as S from "./styled";

import Logo from "../../components/Logo";
import FooterSecondary from "../../components/FooterSecondary";

const Register = ({ history }) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  async function handleSubmit(e) {
    e.preventDefault();

    if (!name && !lastName && !email && !password) {
      setErrors({ error: "os campos não podem está vazio." });
    } else if (!name) {
      setErrors({ error: "o campo nome não podem está vazio." });
    } else if (!lastName) {
      setErrors({ error: "o campo sobrenome não podem está vazio." });
    } else if (!email) {
      setErrors({ error: "o campo email não podem está vazio." });
    } else if (!password) {
      setErrors({ error: "o campo senha não podem está vazio." });
    }
  }

  return (
    <>
      <S.HeaderWrapper>
        <Logo />
      </S.HeaderWrapper>
      <S.RegisterContent>
        <S.Form onSubmit={handleSubmit}>
          <S.Title>Cadastra-se</S.Title>
          {errors && <S.ErrorText>{errors.error}</S.ErrorText>}
          <S.Input
            type="text"
            id="name"
            name="name"
            placeholder="Nome"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <S.Input
            type="text"
            id="lastname"
            name="lastname"
            placeholder="Sobrenome"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
          <S.Input
            type="email"
            id="email"
            name="email"
            placeholder="E-mail"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <S.Input
            type="password"
            id="password"
            name="password"
            autoComplete="off"
            placeholder="Senha"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <S.Button type="submit" className="btn">
            Cadastrar
          </S.Button>
          <S.Link href="/entrar">Já tenho uma conta. Entrar</S.Link>
        </S.Form>
      </S.RegisterContent>
      <FooterSecondary />
    </>
  );
};

export default Register;
