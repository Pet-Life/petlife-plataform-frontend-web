import React, { useContext } from "react";

import { Context } from "../../Context/AuthContext";

import * as S from "../../components/LayoutDashboard/styled";
import * as s from "./styled";

import DashboardHeader from "../../components/DashboardHeader";
import DashboardSideBar from "../../components/DashboardSideBar";
import Footer from "../../components/Footer";

const StoreDashboard = () => {
  const users = { avatar: "http://192.168.0.19:5000/files/logo.png" };
  const { loadProducts } = useContext(Context);

  loadProducts();

  return (
    <S.LayoutWrapper>
      <DashboardHeader avatar={users.avatar} />
      <S.LayoutContent>
        <DashboardSideBar />
        <S.LayoutMain>
          <S.TitlePage>Dashboard</S.TitlePage>
          <S.TitlePage>Produtos</S.TitlePage>
          <s.Table>
            <s.TableTr>
              <s.TableTh>ID</s.TableTh>
            </s.TableTr>
          </s.Table>
        </S.LayoutMain>
      </S.LayoutContent>
      <Footer />
    </S.LayoutWrapper>
  );
};

export default StoreDashboard;
