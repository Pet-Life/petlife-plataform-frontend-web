import React from "react";

import * as S from "./styled";

import Logo from "../Logo";

const HeaderMain = () => {
  return (
    <S.HeaderWrapper>
      <S.HeaderContent>
        <Logo />
        <S.FormWrapper>
          <S.Input type="text" placeholder="O que você procura?" />
        </S.FormWrapper>
        <S.AddressWrapper>
          <S.AddressTitle>Local de Entrega</S.AddressTitle>
          <S.Span>
            <S.LocationIcon />
            Rua Nossa Senhora...
            <S.ArrowDropIcon />
          </S.Span>
        </S.AddressWrapper>
        <S.IconsWrapper>
          <S.BasketIcon />
          <S.NotificationIcon />
          <S.StoreIcon />
        </S.IconsWrapper>
        <S.ProfileWrapper>
          <S.ProfileAvatar />
        </S.ProfileWrapper>
      </S.HeaderContent>
    </S.HeaderWrapper>
  );
};

export default HeaderMain;
