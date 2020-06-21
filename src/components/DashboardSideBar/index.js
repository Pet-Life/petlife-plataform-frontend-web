import React, { useContext } from "react";
import { Context } from "../../Context/AuthContext";

import * as S from "./styled";

const DashboardSideBar = () => {
  const { handleLogoutShop } = useContext(Context);

  return (
    <>
      <S.SidebarWrapper>
        <S.Menu>
          <S.Link href="/petshop/dashboard">
            <S.DashboardIcon /> <S.Span>Dashboard</S.Span>
          </S.Link>
          <S.Link href="/petshop/profile">
            <S.AssignIcon /> <S.Span>Meus dados</S.Span>
          </S.Link>
          <S.Link href="/petshop/produtos">
            <S.BusinessIcon /> <S.Span>Produtos</S.Span>
          </S.Link>
          <S.Link href="/petshop/configuracoes">
            <S.SettingsIcon /> <S.Span>Configuraçoes</S.Span>
          </S.Link>
          <S.ButtonLogout type="button" onClick={handleLogoutShop}>
            <S.PowerIcon /> Sair
          </S.ButtonLogout>
        </S.Menu>
      </S.SidebarWrapper>
    </>
  );
};

export default DashboardSideBar;
