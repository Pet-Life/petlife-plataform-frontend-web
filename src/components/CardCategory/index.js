import React from "react";

import * as S from "./styled";

const CardCategory = () => {
  return (
    <S.CardWrapper>
      <S.Title>Categorias</S.Title>
      <S.List>
        <S.Link href="#">
          <S.ListItem>Ração e Alimentos</S.ListItem>
        </S.Link>
        <S.Link href="#">
          <S.ListItem>Medicamentos</S.ListItem>
        </S.Link>
        <S.Link href="#">
          <S.ListItem>Briquedos</S.ListItem>
        </S.Link>
        <S.Link href="#">
          <S.ListItem>Higiene</S.ListItem>
        </S.Link>
      </S.List>
    </S.CardWrapper>
  );
};

export default CardCategory;
