import React from "react";

import * as S from "./styled";

import HeaderMain from "../../components/HeaderMain";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import CardCategory from "../../components/CardCategory";
import CardProduct from "../../components/CardProduct";

const Main = () => {
  const user = sessionStorage.getItem("user");
  return (
    <>
      <HeaderMain address={user} />
      <Banner />
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
