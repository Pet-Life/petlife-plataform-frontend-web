import React from "react";

import * as S from "./styled";

import img from "../../assets/racao_1.jpg";

const CardProduct = () => {
  return (
    <S.Link href="#">
      <S.CardWrapper>
        <S.Photo src={img} />
        <S.StartWrapper>
          <S.StartIcon />
          <S.StartIcon />
          <S.StartIcon />
          <S.StartIcon />
          <S.StartIcon />
        </S.StartWrapper>
        <S.CardTitle>Ração Special Dog Prime para Cães Adultos</S.CardTitle>
        <S.Span>R$ 174,00</S.Span>
      </S.CardWrapper>
    </S.Link>
  );
};

export default CardProduct;
