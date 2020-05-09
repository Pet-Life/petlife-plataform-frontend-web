import React from "react";

import * as S from "./styled";

import HeaderMain from "../../components/HeaderMain";
import Footer from "../../components/Footer";

const ShoppingCardPage = () => {
  const user = sessionStorage.getItem("user");
  return (
    <>
      <HeaderMain address={user} />
      <h1>Page Shopping Card</h1>
      <Footer />
    </>
  );
};

export default ShoppingCardPage;
