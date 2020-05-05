import React from "react";

import * as S from "./styled";

const CardStore = ({ logo, name, text }) => {
  return (
    <>
      <S.StoreContent>
        <S.StoreDetalh>
          <S.StoreLogo src={logo} />
          <S.StoreInfo>
            <S.StoreName>{name}</S.StoreName>
            <S.StoreText>{text}</S.StoreText>
          </S.StoreInfo>
        </S.StoreDetalh>
      </S.StoreContent>
    </>
  );
};

export default CardStore;
