import React, { useState } from "react";

import * as S from "./styled";

import Logo from "../../components/Logo";

const DashboardHeader = ({ avatar }) => {
  const [isOpenProfile, setIsOpenProfile] = useState(false);

  const handleClickProfile = () => {
    return setIsOpenProfile(true);
  };

  const handleClickProfileOutside = (event) => {
    if (event.current && !event.current(event.target)) {
      return setIsOpenProfile(false);
    }
  };

  return (
    <>
      <S.HeaderWrapper>
        <Logo />
        <S.MenuWrapper>
          <S.AvatarWraper
            onClick={handleClickProfile}
            onAuxClick={(event) => handleClickProfileOutside}
          >
            <S.AvatarProfile src={avatar} />
            <S.DropdownProfile isOpenProfile={isOpenProfile}>
              Teste
            </S.DropdownProfile>
          </S.AvatarWraper>
        </S.MenuWrapper>
      </S.HeaderWrapper>
    </>
  );
};

export default DashboardHeader;
