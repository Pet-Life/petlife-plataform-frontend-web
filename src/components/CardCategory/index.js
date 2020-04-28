import React from "react";

import * as S from "./styled";

const CardCategory = () => {
  return (
    <S.CardWrapper>
      <S.Title>Categorias</S.Title>
      <S.List>
        <S.ListItem>Ração e Alimentos</S.ListItem>
        <S.ListItem>Medicamentos</S.ListItem>
        <S.ListItem>Briquedos</S.ListItem>
        <S.ListItem>Higiene</S.ListItem>
      </S.List>
    </S.CardWrapper>
  );
};

export default CardCategory;
