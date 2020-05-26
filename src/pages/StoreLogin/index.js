import React, { useContext } from "react";
import { useForm } from "react-hook-form";

import { Context } from "../../Context/AuthContext";

import * as S from "./styled";

import Logo from "../../components/Logo";
import FooterSecondary from "../../components/FooterSecondary";

const StoreLogin = () => {
  const { register, handleSubmit, errors } = useForm();
  const { loading, hanldeLoginShop } = useContext(Context);

  if (loading) {
    return <p>Carregando...</p>;
  }

  const onSubmit = (data) => {
    hanldeLoginShop(data);
  };

  return (
    <>
      <S.HeaderWrapper>
        <Logo />
      </S.HeaderWrapper>
      <S.LoginWrapper>
        <S.Form
          id="form-login"
          className="form-login"
          onSubmit={handleSubmit(onSubmit)}
        >
          <S.TitleForm>Gerencie sua loja</S.TitleForm>
          <S.Input
            type="email"
            id="email"
            name="email"
            placeholder="Seu e-mail"
            ref={register({
              required: "Campo obrigatorio",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Informe um e-mail valido",
              },
            })}
          />
          {errors.email && (
            <S.TextError className="error">{errors.email.message}</S.TextError>
          )}
          <S.Input
            type="password"
            id="password"
            name="password"
            placeholder="Sua senha"
            autoComplete="none"
            autoCorrect="none"
            ref={register({ required: "Campo obrigatorio" })}
          />
          {errors.password && (
            <S.TextError className="error">
              {errors.password.message}
            </S.TextError>
          )}
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
