import React, { useState, useRef } from "react";

import * as S from "./styled";

import Logo from "../../components/Logo";

const DashboardHeader = ({ avatar }) => {
  const [isOpenProfile, setIsOpenProfile] = useState(false);
  const container = useRef();

  const handleClickProfile = () => {
    setIsOpenProfile(true);
  };

  const handleClickProfileOutside = (event) => {
    if (
      event.container.current &&
      !event.container.current.containers(event.target)
    ) {
      setIsOpenProfile(false);
    }
  };

  return (
    <>
      <S.HeaderWrapper>
        <Logo />
        <S.MenuWrapper>
          <S.AvatarWraper
            ref={container}
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
