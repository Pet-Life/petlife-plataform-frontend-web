import React from "react";

import logo from "../../assets/logo.svg";

import * as S from "./styled";

const Logo = () => {
  return (
    <S.LogoWrapper>
      <S.LogoImage src={logo} alt="Logo Petlife" />
    </S.LogoWrapper>
  );
};

export default Logo;
