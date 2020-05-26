import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";

import { Context } from "../../Context/AuthContext";

import * as S from "./styled";

import Logo from "../../components/Logo";
import FooterSecondary from "../../components/FooterSecondary";
import Loader from "../../components/Loader";

const StoreRegister = ({ history }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, errors } = useForm();
  const { handleRegisterShop } = useContext(Context);

  const onSubmit = async (data) => {
    const zipcode =
      data.street + " " + data.district + " " + data.city + " " + data.state;

    handleRegisterShop(data, zipcode);

    history.push("/petshop/entrar");
  };

  return (
    <>
      <S.HeaderWrapper>
        <Logo />
        <S.Menu>
          <S.Link href="/petshop/entrar">Já sou parceiro</S.Link>
        </S.Menu>
      </S.HeaderWrapper>
      <S.MainWrapper>
        {isLoading && <Loader setIsLoading={setIsLoading} />}
        <S.Form
          id="form-register"
          className="form-register"
          onSubmit={handleSubmit(onSubmit)}
        >
          <S.TitleForm>Cadastrar meu Pet Shop</S.TitleForm>
          <S.Label>Nome do Petshop:</S.Label>
          <S.Input
            type="text"
            name="name"
            placeholder="Nome do seu PetShop"
            ref={register({
              required: "Campo obrigatorio",
            })}
          />
          {errors.name && (
            <S.TextError className="error">{errors.name.message}</S.TextError>
          )}
          <S.Label>CNPJ:</S.Label>
          <S.Input
            type="text"
            name="cnpj"
            placeholder="Seu CNPJ"
            ref={register({
              required: "Campo obrigatorio",
              pattern: {
                value: /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/,
                message: "Informe um CNPJ válido",
              },
            })}
          />
          {errors.cnpj && (
            <S.TextError className="error">{errors.cnpj.message}</S.TextError>
          )}
          <S.FormGroup>
            <S.Label>Endereço:</S.Label>
            <S.FormContent className="form-content">
              <S.FormGroup className="form-group">
                <S.Input
                  type="text"
                  name="street"
                  placeholder="Logradouro"
                  ref={register({ required: "Campo obrigatorio" })}
                />
                {errors.street && (
                  <S.TextError className="error">
                    {errors.street.message}
                  </S.TextError>
                )}
              </S.FormGroup>
              <S.FormGroup>
                <S.Input
                  type="text"
                  name="number"
                  placeholder="Número"
                  ref={register({ required: "Campo obrigatorio" })}
                />
                {errors.number && (
                  <S.TextError className="error">
                    {errors.number.message}
                  </S.TextError>
                )}
              </S.FormGroup>
            </S.FormContent>
          </S.FormGroup>
          <S.FormGroup className="form-group">
            <S.FormContent className="form-content">
              <S.FormGroup className="form-group">
                <S.Input
                  type="text"
                  name="district"
                  placeholder="Bairro"
                  ref={register({ required: "Campo obrigatorio" })}
                />
                {errors.district && (
                  <S.TextError className="error">
                    {errors.district.message}
                  </S.TextError>
                )}
              </S.FormGroup>
              <S.Input
                type="text"
                name="complement"
                placeholder="Complemento"
              />
            </S.FormContent>
          </S.FormGroup>
          <S.FormGroup className="form-group">
            <S.FormContent className="form-content">
              <S.FormGroup className="form-group">
                <S.Input
                  type="text"
                  name="city"
                  placeholder="Cidade"
                  ref={register({ required: "Campo obrigatorio" })}
                />
                {errors.city && (
                  <S.TextError className="error">
                    {errors.city.message}
                  </S.TextError>
                )}
              </S.FormGroup>
              <S.FormGroup className="form-group">
                <S.Input
                  type="text"
                  name="state"
                  placeholder="Estado"
                  ref={register({ required: "Campo obrigatorio" })}
                />
                {errors.state && (
                  <S.TextError className="error">
                    {errors.state.message}
                  </S.TextError>
                )}
              </S.FormGroup>
            </S.FormContent>
          </S.FormGroup>
          <S.FormGroup className="form-group">
            <S.Label>Email:</S.Label>
            <S.Input
              type="email"
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
              <S.TextError className="error">
                {errors.email.message}
              </S.TextError>
            )}
          </S.FormGroup>
          <S.FormGroup className="form-group">
            <S.Label>Senha:</S.Label>
            <S.Input
              type="password"
              name="password"
              placeholder="Senha"
              autoComplete="none"
              autoCorrect="none"
              ref={register({
                required: "Campo obrigatorio",
              })}
            />
            {errors.password && (
              <S.TextError className="error">
                {errors.password.message}
              </S.TextError>
            )}
          </S.FormGroup>
          <S.ButtonRegister type="submit">Realizar cadastro</S.ButtonRegister>
        </S.Form>
      </S.MainWrapper>
      <FooterSecondary />
    </>
  );
};

export default StoreRegister;
