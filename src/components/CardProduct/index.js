import React from "react";

import * as S from "./styled";

import img from "../../assets/racao_1.jpg";

const CardProduct = () => {
  return (
    <S.CardWrapper>
      <S.Photo src={img} />
      <S.CardTitle>Ração Special Dog Prime para Cães Adultos</S.CardTitle>
      <S.Span>R$ 174,00</S.Span>
    </S.CardWrapper>
  );
};

export default CardProduct;
