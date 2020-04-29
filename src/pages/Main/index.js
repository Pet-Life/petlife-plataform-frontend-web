import React from "react";

import * as S from "./styled";

import HeaderMain from "../../components/HeaderMain";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import CardCategory from "../../components/CardCategory";
import CardProduct from "../../components/CardProduct";

const Main = () => {
  return (
    <>
      <HeaderMain />
      <Banner />
      <S.SectionMain>
        <CardCategory />
        <S.MainContent>
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </S.MainContent>
      </S.SectionMain>
      <Footer />
    </>
  );
};

export default Main;
