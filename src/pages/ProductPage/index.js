import React, { useEffect, useContext, useState, createRef } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import { CartContext } from "../../Context/CartContext";

import * as S from "./styled";

import HeaderMain from "../../components/HeaderMain";
import Footer from "../../components/Footer";

const ProductPage = () => {
  const [product, setProduct] = useState({});
  const { addProduct, cartItems, increase } = useContext(CartContext);
  const user = sessionStorage.getItem("user");
  let { id } = useParams();
  const isInCart = (product) => {
    return !!cartItems.find((item) => item.id === product.id);
  };
  const ref = createRef();

  useEffect(() => {
    async function loadProducts() {
      await api
        .get(`products/${id}`)
        .then((response) => {
          const { product } = response.data;
          setProduct(product);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    loadProducts();
  }, [id]);

  return (
    <>
      <HeaderMain address={user} />
      <S.ProductWrapper>
        <S.ProductContent>
          <S.ProductPhoto src={product.photo} />
          <S.DescriptionWrapper>
            <S.ProductTitle>{product.name}</S.ProductTitle>
            <S.DescriptionText>Descrição</S.DescriptionText>
            <S.DescriptionText>{product.description}</S.DescriptionText>
          </S.DescriptionWrapper>
        </S.ProductContent>
        <S.PaymentWrapper>
          <S.PaymentSpan>Preço: R$ {product.unityPrice}</S.PaymentSpan>
          {product.quantify <= 0 ? (
            <S.PaymentText>Produto não disponível</S.PaymentText>
          ) : (
            <S.PaymentText>
              Quantidade em estoque: {product.quantity}
            </S.PaymentText>
          )}
          {isInCart(product) && (
            <S.ButtonPlus ref={ref} onClick={() => increase(product)}>
              Adicionar mais
            </S.ButtonPlus>
          )}
          {!isInCart(product) && (
            <S.ButtonCar ref={ref} onClick={() => addProduct(product)}>
              Adicionar ao carrinho
            </S.ButtonCar>
          )}
        </S.PaymentWrapper>
      </S.ProductWrapper>
      <Footer />
    </>
  );
};

export default ProductPage;
