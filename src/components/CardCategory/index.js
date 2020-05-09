import React, { useEffect, useState } from "react";
import api from "../../services/api";

import * as S from "./styled";

const CardCategory = () => {
  const [categories, setCategories] = useState([]);
  const [isCheck, setIsCheck] = useState(false);

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
            <S.Link key={category.id} onClick={() => setIsCheck(true)}>
              <S.ListItem>
                {isCheck ? <S.CheckIcon /> : <S.CheckBoxIcon />}
                {category.name}
              </S.ListItem>
            </S.Link>
          ))}
      </S.List>
    </S.CardWrapper>
  );
};

export default CardCategory;
