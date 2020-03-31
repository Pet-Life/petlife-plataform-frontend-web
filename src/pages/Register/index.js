import React from "react";

import * as S from "./styled";

import Logo from "../../components/Logo";
import image from "../../assets/image-2.jpg";

const Register = () => {
  return (
    <S.RegisterWrapper>
      <S.RegisterContent>
        <Logo />
        <S.Image src={image} />
      </S.RegisterContent>
      <S.RegisterContent>
        <S.Form>
          <S.Title>Cadastra-se</S.Title>
          <S.Input type="text" placeholder="Nome" />
          <S.Input type="text" placeholder="Sobrenome" />
          <S.Input type="email" placeholder="E-mail" />
          <S.Input type="password" placeholder="Senha" />
          <S.Button type="submit">Cadastar</S.Button>
          <S.Link href="/entrar">Já tenho uma conta. Entrar</S.Link>
        </S.Form>
      </S.RegisterContent>
    </S.RegisterWrapper>
  );
};

export default Register;
