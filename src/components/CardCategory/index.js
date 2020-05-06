import React, { useEffect, useState } from "react";
import api from "../../services/api";

import * as S from "./styled";

const CardCategory = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function laodCategories() {
      await api
        .get("/categories")
        .then((response) => {
          setCategories(response.data.categories);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    laodCategories();
  }, []);

  return (
    <S.CardWrapper>
      <S.Title>Categorias</S.Title>
      <S.List>
        {categories &&
          categories.map((category) => (
            <S.Link key={category.id}>
              <S.ListItem>{category.name}</S.ListItem>
            </S.Link>
          ))}
      </S.List>
    </S.CardWrapper>
  );
};

export default CardCategory;
