import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";

import * as S from "./styled";

import HeaderMain from "../../components/HeaderMain";
import Footer from "../../components/Footer";

const ProductPage = ({ match }) => {
  const [product, setProduct] = useState({});
  const user = sessionStorage.getItem("user");
  let { id } = useParams();

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

  console.log(product);
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
          <S.ButtonCar href="#">Adiciona ao carrinho</S.ButtonCar>
          <S.ButtonBuy href="#">Comprar agora</S.ButtonBuy>
        </S.PaymentWrapper>
      </S.ProductWrapper>
      <Footer />
    </>
  );
};

export default ProductPage;
