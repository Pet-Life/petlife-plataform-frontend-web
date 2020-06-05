import React, { useContext } from "react";
import { useForm } from "react-hook-form";

import { Context } from "../../Context/AuthContext";

import * as S from "./styled";

import Logo from "../../components/Logo";
import FooterSecondary from "../../components/FooterSecondary";

const Login = ({ history }) => {
  const { register, handleSubmit, errors } = useForm();
  const { handleLoginConsumer } = useContext(Context);

  const onSubmit = async (data) => {
    handleLoginConsumer(data);
    history.push("/entrar");
  };

  return (
    <>
      <S.HeaderWrapper>
        <Logo />
      </S.HeaderWrapper>
      <S.LoginContent>
        <S.Form
          id="form-register"
          className="form-register"
          onSubmit={handleSubmit(onSubmit)}
        >
          <S.Title>Entrar</S.Title>
          <S.Input
            type="text"
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
            name="password"
            autoComplete="none"
            autoCorrect="none"
            placeholder="Senha"
            ref={register({
              required: "Campo obrigatorio",
              minLength: {
                value: 8,
                message:
                  "A senha tem que ter no mínimo 8 caracteres e máximo 16.",
              },
              maxLength: {
                value: 16,
                message:
                  "A senha tem que ter no mínimo 8 caracteres e máximo 16.",
              },
            })}
          />
          {errors.password && (
            <S.TextError className="error">
              {errors.password.message}
            </S.TextError>
          )}
          <S.Button type="submit">Entrar</S.Button>
          <S.Link href="/cadastro">Novo por aqui? Cadastre-se </S.Link>
        </S.Form>
      </S.LoginContent>
      <FooterSecondary />
    </>
  );
};

export default Login;
