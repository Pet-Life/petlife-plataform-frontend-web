import React from "react";

import * as S from "../../components/LayoutDashboard/styled";

import DashboardHeader from "../../components/DashboardHeader";
import DashboardSideBar from "../../components/DashboardSideBar";
import Footer from "../../components/Footer";

const DashboardPromotions = () => {
  return (
    <S.LayoutWrapper>
      <DashboardHeader />
      <S.LayoutContent>
        <DashboardSideBar />
        <S.LayoutMain>
          <h1>Promoções</h1>
        </S.LayoutMain>
      </S.LayoutContent>
      <Footer />
    </S.LayoutWrapper>
  );
};

export default DashboardPromotions;
