import React, { useEffect } from "react";
import api from "../../services/api";

import * as S from "../../components/LayoutDashboard/styled";
import * as s from "./styled";

import DashboardHeader from "../../components/DashboardHeader";
import DashboardSideBar from "../../components/DashboardSideBar";
import Footer from "../../components/Footer";

const StoreDashboard = () => {
  const [users, setUsers] = React.useState({});

  useEffect(() => {
    async function loadUser() {
      const user = localStorage.getItem("user");
      console.log(user);
      const response = await api.get("/users/shops", {
        headers: { id: user },
      });

      console.log(response.data);

      setUsers(response.data.shop);
    }

    loadUser();
  }, []);

  console.log(users.avatar);

  return (
    <S.LayoutWrapper>
      <DashboardHeader avatar={users.avatar} />
      <S.LayoutContent>
        <DashboardSideBar />
        <S.LayoutMain>
          <S.TitlePage>Dashboard</S.TitlePage>
          <S.TitlePage>Últimos pedidos</S.TitlePage>
          <s.Table>
            <s.TableTr>
              <s.TableTh>Cliente</s.TableTh>
              <s.TableTh>Data</s.TableTh>
              <s.TableTh>Pagamento</s.TableTh>
            </s.TableTr>
            <s.TableTr>
              <s.TableTd>NULL</s.TableTd>
              <s.TableTd>NULL</s.TableTd>
              <s.TableTd>NULL</s.TableTd>
            </s.TableTr>
          </s.Table>
        </S.LayoutMain>
      </S.LayoutContent>
      <Footer />
    </S.LayoutWrapper>
  );
};

export default StoreDashboard;
