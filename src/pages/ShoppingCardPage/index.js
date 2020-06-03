import React, { useState } from "react";

import * as S from "./styled";

import HeaderMain from "../../components/HeaderMain";
import Footer from "../../components/Footer";

const ShoppingCardPage = () => {
  const user = sessionStorage.getItem("user");
  const cart = JSON.parse(localStorage.getItem("cart"));
  const [products, setProducts] = useState(cart);

  return (
    <>
      <HeaderMain address={user} />
      <S.PageWrapper>
        {!products ? (
          <S.Text>Seu carrinho de compra está vazio.</S.Text>
        ) : (
          products.map((product) => (
            <S.List>
              <S.ListItem key={product.product.id}>
                <S.Header src={product.product.photo} />
                <S.SpanTitle>{product.product.name}</S.SpanTitle>
                <S.SpanTitle>
                  Preço: R$ {product.product.unityPrice}
                </S.SpanTitle>
                <S.ButtonRemove>Excluir</S.ButtonRemove>
              </S.ListItem>
            </S.List>
          ))
        )}
      </S.PageWrapper>
      <Footer />
    </>
  );
};

export default ShoppingCardPage;
