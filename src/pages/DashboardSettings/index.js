import React, { useEffect } from "react";
import api from "../../services/api";

import * as S from "../../components/LayoutDashboard/styled";

import DashboardHeader from "../../components/DashboardHeader";
import DashboardSideBar from "../../components/DashboardSideBar";
import Footer from "../../components/Footer";

const DashboardSettings = () => {
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

  return (
    <S.LayoutWrapper>
      <DashboardHeader avatar={users.avatar} />
      <S.LayoutContent>
        <DashboardSideBar />
        <S.LayoutMain>
          <S.TitlePage>Configurações</S.TitlePage>
        </S.LayoutMain>
      </S.LayoutContent>
      <Footer />
    </S.LayoutWrapper>
  );
};

export default DashboardSettings;
