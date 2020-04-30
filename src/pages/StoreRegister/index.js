import React from "react";
import api from "../../services/api";

import * as S from "./styled";

import Logo from "../../components/Logo";
import Footer from "../../components/Footer";

const StoreRegister = ({ history }) => {
  const [name, setName] = React.useState("");
  const [cnpj, setCnpj] = React.useState("");
  const [zipcode, setZipcode] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  async function handlerSubmit(event) {
    event.preventDefault();

    const response = await api.post("/users/shops/signup", {
      name,
      cnpj,
      zipcode,
      email,
      password,
    });

    const { id } = response.data.shop;

    localStorage.setItem("user", id);

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
          <S.Input
            type="text"
            placeholder="Nome do Pet Shop"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <S.Input
            type="text"
            placeholder="CNPJ"
            value={cnpj}
            onChange={(event) => setCnpj(event.target.value)}
          />
          <S.Input
            type="zipcode"
            placeholder="Informe o CEP de endereço do Pet Shop"
            value={zipcode}
            onChange={(event) => setZipcode(event.target.value)}
          />
          <S.Input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
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
      <Footer />
    </>
  );
};

export default StoreRegister;
