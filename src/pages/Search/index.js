import React from "react";

import * as S from "./styled";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Title from "../../components/Title";
import ButtonPrimary from "../../components/ButtonPrimary";
import ButtonSecondary from "../../components/ButtonSecondary";

const Search = () => {
  return (
    <>
      <Header />
      <S.ContentMain>
        <Title title="Encontrar um Pet Shop" />
        <S.Form>
          <S.Input type="text" placeholder="CEP" />

          <S.Grupo className="input-group">
            <S.InputForm3
              className="input-85"
              type="text"
              placeholder="Endereço"
            />
            <S.InputForm1
              className="input-15"
              type="text"
              placeholder="Número"
            />
          </S.Grupo>
          <S.Grupo className="input-group">
            <S.InputForm2
              className="input-50"
              type="text"
              placeholder="Bairro"
            />
            <S.InputForm2
              className="input-50"
              type="text"
              placeholder="Complemento"
            />
          </S.Grupo>
          <S.Grupo className="input-group">
            <S.InputForm3
              className="input-85"
              type="text"
              placeholder="Cidade"
            />
            <S.InputForm1 className="input-15" type="text" placeholder="UF" />
          </S.Grupo>
          <S.Button type="submit">Buscar</S.Button>
        </S.Form>
      </S.ContentMain>
      <S.ListPets>
        <Title title="Selecione um Pet Shop" />
        <S.ListContent>
          <S.Text>Filtre por</S.Text>
          <ButtonPrimary text="Entrega" />
          <ButtonSecondary text="Retirada" />
        </S.ListContent>
      </S.ListPets>
      <Footer />
    </>
  );
};

export default Search;
