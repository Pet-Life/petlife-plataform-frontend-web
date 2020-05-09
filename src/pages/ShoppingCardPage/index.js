import React from "react";

import * as S from "./styled";

import HeaderMain from "../../components/HeaderMain";
import Footer from "../../components/Footer";

const ShoppingCardPage = () => {
  const user = sessionStorage.getItem("user");
  return (
    <>
      <HeaderMain address={user} />
      <S.PageWrapper>
        <S.Text>Seu carrinho de compra está vazio.</S.Text>
      </S.PageWrapper>
      <Footer />
    </>
  );
};

export default ShoppingCardPage;
