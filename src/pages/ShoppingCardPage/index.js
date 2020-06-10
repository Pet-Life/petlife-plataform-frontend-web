import React, { useState, useContext } from "react";
import { CartContext } from "../../Context/CartContext";

import * as S from "./styled";

import HeaderMain from "../../components/HeaderMain";
import Footer from "../../components/Footer";

const ShoppingCardPage = () => {
  const user = sessionStorage.getItem("user");
  const {
    total,
    cartItems,
    itemCount,
    clearCart,
    increase,
    decrease,
    removeProduct,
  } = useContext(CartContext);
  const cart = JSON.parse(localStorage.getItem("cart"));
  const [products] = useState(cart);

  console.log(products, increase);

  return (
    <>
      <HeaderMain address={user} />
      <S.PageWrapper>
        {products.length > 0 ? (
          products.map((product) => (
            <>
              <S.ProductWrapper key={product.id}>
                <S.ProductContent>
                  <S.ImageWrapper>
                    <S.ProductImage src={product.photo} />
                  </S.ImageWrapper>
                  <S.TitleWrapper>
                    <S.ProductTitle>{product.name}</S.ProductTitle>
                    <S.Span>R$ {product.unityPrice}</S.Span>
                  </S.TitleWrapper>
                  <S.QuantifyWrapper>
                    <S.Span>Qtd: {product.qtd}</S.Span>
                  </S.QuantifyWrapper>
                  <S.ButtonWrapper>
                    <S.ButtonRemove onClick={() => increase(product)}>
                      +
                    </S.ButtonRemove>
                    {product.qtd > 1 && (
                      <S.ButtonRemove onClick={() => decrease(product)}>
                        -
                      </S.ButtonRemove>
                    )}
                    {product.qtd === 1 && (
                      <S.ButtonRemove onClick={() => removeProduct(product)}>
                        x
                      </S.ButtonRemove>
                    )}
                  </S.ButtonWrapper>
                </S.ProductContent>
              </S.ProductWrapper>
              {cartItems.length > 0 && (
                <S.TotalWrapper>
                  <S.Span>Total de Items</S.Span>
                  <S.Span>{itemCount}</S.Span>
                  <S.Span>Total a pagar</S.Span>
                  <S.Span>R$ {total}</S.Span>
                  <S.Button type="button" onClick={clearCart}>
                    Limpar carrinho
                  </S.Button>
                </S.TotalWrapper>
              )}
            </>
          ))
        ) : (
          <S.Text>Seu carrinho de compra está vazio.</S.Text>
        )}
      </S.PageWrapper>
      <Footer />
    </>
  );
};

export default ShoppingCardPage;
