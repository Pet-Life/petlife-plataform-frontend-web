import React from "react";

import * as S from "./styled";

import Logo from "../../components/Logo";
import FooterSecondary from "../../components/FooterSecondary";

const StoreLogin = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <>
      <S.HeaderWrapper>
        <Logo />
      </S.HeaderWrapper>
      <S.LoginWrapper>
        <S.Form>
          <S.TitleForm>Gerencie sua loja</S.TitleForm>
          <S.Input
            type="email"
            placeholder="Seu e-mail"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <S.Input
            type="senha"
            placeholder="Sua senha"
            value={password}
            onChange={(event) => setPassword(event.target.valeu)}
          />
          <S.Link href="#">Esqueceu sua senha?</S.Link>
          <S.ButtonRegister type="submit">Entrar</S.ButtonRegister>
          <S.Link href="/petshop/cadastro">
            Ainda não possui cadastro? Cadastre seu Pet Shop
          </S.Link>
        </S.Form>
      </S.LoginWrapper>
      <FooterSecondary />
    </>
  );
};

export default StoreLogin;
