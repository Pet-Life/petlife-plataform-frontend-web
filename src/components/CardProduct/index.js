import React, { useEffect, useState } from "react";
import api from "../../services/api";

import * as S from "./styled";

const CardProduct = () => {
  const [products, setProducts] = useState([]);
  const shopId = sessionStorage.getItem("shopId");

  useEffect(() => {
    async function loadProducts() {
      await api
        .get(`products/${shopId}`)
        .then((response) => {
          setProducts(response.data.products);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    loadProducts();
  }, [shopId]);

  console.log(products);

  return (
    <>
      {products ? (
        products.map((product) => (
          <S.CardWrapper key={product.id}>
            <S.Photo src={product.photo} />
            <S.StartWrapper>
              <S.StartIcon />
              <S.StartIcon />
              <S.StartIcon />
              <S.StartIcon />
              <S.StartIcon />
            </S.StartWrapper>
            <S.CardTitle>{product.name}</S.CardTitle>
            <S.Span>R$ {product.unityPrice}</S.Span>
          </S.CardWrapper>
        ))
      ) : (
        <S.CardWrapper>
          <p>Nenhum produto cadastrado.</p>
        </S.CardWrapper>
      )}
    </>
  );
};

export default CardProduct;
