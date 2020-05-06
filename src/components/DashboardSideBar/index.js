import React from "react";

import * as S from "./styled";

const DashboardSideBar = () => {
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
        </S.Menu>
      </S.SidebarWrapper>
    </>
  );
};

export default DashboardSideBar;
