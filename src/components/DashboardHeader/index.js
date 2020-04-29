import React from "react";

import * as S from "./styled";

import Logo from "../../components/Logo";

const DashboardHeader = () => {
  return (
    <>
      <S.HeaderWrapper>
        <Logo />
        <S.MenuWrapper>
          <S.Button type="button">Ver minha loja</S.Button>
          <S.NotificationIcon />
          <S.AvatarProfile />
        </S.MenuWrapper>
      </S.HeaderWrapper>
    </>
  );
};

export default DashboardHeader;
