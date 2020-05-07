import React, { useState } from "react";

import * as S from "./styled";

import Logo from "../Logo";
import Modal from "../Modal";
import ModalStore from "../ModalStore";

const HeaderMain = ({ address }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isLogged = false;
  return (
    <S.HeaderWrapper>
      <Logo />

      <S.FormWrapper>
        <S.Input type="text" placeholder="O que você procura?" />
      </S.FormWrapper>

      <S.AddressWrapper>
        <S.AddressTitle>Local de Entrega</S.AddressTitle>
        <S.Span>
          <S.LocationIcon />
          {address}
          <S.Button type="button" onClick={() => setIsOpen(true)}>
            <S.ArrowDropIcon />
          </S.Button>
        </S.Span>
      </S.AddressWrapper>
      <S.IconsWrapper>
        <S.BasketIcon />
        <S.NotificationIcon />
        <S.StoreIcon onClick={() => setIsOpen(true)} />
      </S.IconsWrapper>
      {isLogged ? (
        <S.ProfileWrapper>
          <S.ProfileAvatar />
        </S.ProfileWrapper>
      ) : (
        <S.ButtonLogin href="/entrar">Entrar</S.ButtonLogin>
      )}
      {isOpen && <Modal setIsOpen={setIsOpen} />}
      {isOpen && <ModalStore setIsOpen={setIsOpen} />}
    </S.HeaderWrapper>
  );
};

export default HeaderMain;
