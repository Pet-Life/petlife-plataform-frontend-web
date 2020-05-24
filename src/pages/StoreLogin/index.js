import React from "react";

import * as S from "./styled";

import Logo from "../../components/Logo";
import FooterSecondary from "../../components/FooterSecondary";

const StoreLogin = ({ history }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [visiError, setVisiError] = React.useState(false);
  let errors = {};

  function handleSubmit(event) {
    event.preventDefault();

    if (email.length <= 0 && password.length <= 0) {
      errors = {
        error: "os campos não podem está vazios!",
      };
      setVisiError(true);
    }
  }

  return (
    <>
      <S.HeaderWrapper>
        <Logo />
      </S.HeaderWrapper>
      <S.LoginWrapper>
        <S.Form onSubmit={handleSubmit}>
          <S.TitleForm>Gerencie sua loja</S.TitleForm>
          <S.TextError visiError={visiError}>texto{errors.error}</S.TextError>
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
