import React from "react";

import * as S from "./styled";

import Logo from "../../components/Logo";

const DashboardHeader = ({ avatar }) => {
  return (
    <>
      <S.HeaderWrapper>
        <Logo />
        <S.MenuWrapper>
          <S.AvatarProfile src={avatar} />
        </S.MenuWrapper>
      </S.HeaderWrapper>
    </>
  );
};

export default DashboardHeader;
