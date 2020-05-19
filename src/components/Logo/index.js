import React from "react";

import logo from "../../assets/logo.svg";

import * as S from "./styled";

const Logo = () => {
  return (
    <S.LogoWrapper>
      <S.Link href="/">
        <S.LogoImage src={logo} alt="Logo Petlife" />
      </S.Link>
    </S.LogoWrapper>
  );
};

export default Logo;
