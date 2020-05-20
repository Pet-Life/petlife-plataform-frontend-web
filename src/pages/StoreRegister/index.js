import React from "react";

import * as S from "./styled";

import Logo from "../../components/Logo";
import FooterSecondary from "../../components/FooterSecondary";

const StoreRegister = ({ history }) => {
  const [name, setName] = React.useState("");
  const [cnpj, setCnpj] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  async function handlerSubmit(event) {
    event.preventDefault();

    history.push("/petshop/dashboard");
  }
  return (
    <>
      <S.HeaderWrapper>
        <Logo />
        <S.Menu>
          <S.Link href="/petshop/entrar">Já sou parceiro</S.Link>
        </S.Menu>
      </S.HeaderWrapper>
      <S.MainWrapper>
        <S.Form onSubmit={handlerSubmit}>
          <S.TitleForm>Cadastrar meu Pet Shop</S.TitleForm>
          <S.Label>Nome do Petshop:</S.Label>
          <S.Input
            type="text"
            placeholder="Nome do seu PetShop"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <S.Label>CNPJ:</S.Label>
          <S.Input
            type="text"
            placeholder="Seu CNPJ"
            value={cnpj}
            onChange={(event) => setCnpj(event.target.value)}
          />
          <S.Label>Endereço:</S.Label>
          <S.FormContent>
            <S.Input type="text" placeholder="Logradouro" />
            <S.Input type="text" placeholder="Número" />
          </S.FormContent>
          <S.FormContent>
            <S.Input type="text" placeholder="Bairro" />
            <S.Input type="text" placeholder="Complemento" />
          </S.FormContent>
          <S.FormContent>
            <S.Input type="text" placeholder="Cidade" />
            <S.Input type="text" placeholder="Estado" />
          </S.FormContent>
          <S.Label>Email:</S.Label>
          <S.Input
            type="email"
            placeholder="Seu e-mail"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <S.Label>Senha:</S.Label>
          <S.Input
            type="password"
            placeholder="Senha"
            autoComplete="none"
            autoCorrect="none"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <S.ButtonRegister type="submit">Realizar cadastro</S.ButtonRegister>
        </S.Form>
      </S.MainWrapper>
      <FooterSecondary />
    </>
  );
};

export default StoreRegister;
