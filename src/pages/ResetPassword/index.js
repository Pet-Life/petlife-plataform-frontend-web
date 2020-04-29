import React from "react";

import * as S from "./styled";

import Logo from "../../components/Logo";
import image from "../../assets/image-2.jpg";

const ResetPassword = () => {
  return (
    <S.ResetWrapper>
      <S.ResetContent>
        <Logo />
        <S.Image src={image} />
      </S.ResetContent>
      <S.ResetContent>
        <S.Form>
          <S.Title>Recupera senha</S.Title>
          <S.Input type="text" placeholder="E-mail" />
          <S.Button type="submit">Entrar</S.Button>
          <S.Link href="/entrar">Já tenho uma conta. Entrar</S.Link>
        </S.Form>
      </S.ResetContent>
    </S.ResetWrapper>
  );
};

export default ResetPassword;
