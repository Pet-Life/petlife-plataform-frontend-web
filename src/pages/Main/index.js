import React from "react";

import * as S from "./styled";

import HeaderMain from "../../components/HeaderMain";
import Footer from "../../components/Footer";
import CardCategory from "../../components/CardCategory";
import CardProduct from "../../components/CardProduct";

const Main = () => {
  const user = sessionStorage.getItem("user");
  const shop = sessionStorage.getItem("shopId");
  if (!user) {
    console.log("ok");
  }
  return (
    <>
      <HeaderMain address={user} shop={shop} />
      <S.SectionMain>
        <CardCategory />
        <S.MainContent>
          <CardProduct />
        </S.MainContent>
      </S.SectionMain>
      <Footer />
    </>
  );
};

export default Main;
