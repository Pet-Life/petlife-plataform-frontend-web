import React from "react";
import PropTypes from "prop-types";

import * as S from "./styled";

import DashboardHeader from "../DashboardHeader";
import DashboardSideBar from "../DashboardSideBar";
import Footer from "../Footer";

const LayoutDashboard = ({ children }) => {
  return (
    <S.LayoutWrapper>
      <DashboardHeader />
      <S.LayoutContent>
        <DashboardSideBar />
        <S.LayoutMain>{children}</S.LayoutMain>
      </S.LayoutContent>
      <Footer />
    </S.LayoutWrapper>
  );
};

LayoutDashboard.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutDashboard;
