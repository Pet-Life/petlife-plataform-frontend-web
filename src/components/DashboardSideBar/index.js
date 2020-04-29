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
          <S.Link href="/petshop/dashboard/profile">
            <S.AssignIcon /> <S.Span>Meus dados</S.Span>
          </S.Link>
          <S.Link href="#">
            <S.BusinessIcon /> <S.Span>Pedidos</S.Span>
          </S.Link>
          <S.Link href="#">
            <S.BusinessIcon /> <S.Span>Produtos</S.Span>
          </S.Link>
          <S.Link href="#">
            <S.BusinessIcon /> <S.Span>Promoções</S.Span>
          </S.Link>
          <S.Link href="#">
            <S.SettingsIcon /> <S.Span>Configuraçoes</S.Span>
          </S.Link>
        </S.Menu>
      </S.SidebarWrapper>
    </>
  );
};

export default DashboardSideBar;
