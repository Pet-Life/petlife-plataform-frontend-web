import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../../services/api";

import * as S from "./styled";

const CardProduct = () => {
  const [products, setProducts] = useState([]);
  const id = sessionStorage.getItem("shopId");
  const history = useHistory();

  useEffect(() => {
    async function loadProducts() {
      await api
        .get(`/users/shops/${id}`)
        .then((response) => {
          setProducts(response.data.shop.products);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    loadProducts();
  }, [id]);

  function handlerProducto(e, id) {
    e.preventDefault();
    console.log(id);
    history.push(`/produto/${id}`);
  }

  return (
    <>
      {products.length > 0 ? (
        products.map((product) => (
          <S.Link
            key={product.id}
            onClick={(e) => handlerProducto(e, product.id)}
          >
            <S.CardWrapper>
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
          </S.Link>
        ))
      ) : (
        <S.Empty>
          <S.EmptyText>Nenhum produto cadastrado.</S.EmptyText>
        </S.Empty>
      )}
    </>
  );
};

export default CardProduct;
