import React, { useContext } from "react";
import { useForm } from "react-hook-form";

import { Context } from "../../Context/AuthContext";

import * as S from "./styled";

import Logo from "../../components/Logo";
import FooterSecondary from "../../components/FooterSecondary";

const Register = ({ history }) => {
  const { register, handleSubmit, errors } = useForm();
  const { handleRegisterConsumer } = useContext(Context);

  const onSubmit = async (data) => {
    handleRegisterConsumer(data);

    console.log(data);

    history.push("/entrar");
  };

  return (
    <>
      <S.HeaderWrapper>
        <Logo />
      </S.HeaderWrapper>
      <S.RegisterContent>
        <S.Form
          id="form-register"
          className="form-register"
          onSubmit={handleSubmit(onSubmit)}
        >
          <S.Title>Cadastra-se</S.Title>
          {errors && <S.TextError>{errors.error}</S.TextError>}
          <S.Input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Nome"
            ref={register({ required: "Campo obrigatório" })}
          />
          {errors.firstName && (
            <S.TextError className="error">
              {errors.firstName.message}
            </S.TextError>
          )}
          <S.Input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Sobrenome"
            ref={register({ required: "Campo obrigatório" })}
          />
          {errors.lastName && (
            <S.TextError className="error">
              {errors.lastName.message}
            </S.TextError>
          )}
          <S.Input
            type="email"
            id="email"
            name="email"
            placeholder="E-mail"
            ref={register({
              required: "Campo obrigatório",
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
            autoComplete="off"
            placeholder="Senha"
            ref={register({
              required: "Campo obrigatorio",
            })}
          />
          {errors.password && (
            <S.TextError className="error">
              {errors.password.message}
            </S.TextError>
          )}
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
