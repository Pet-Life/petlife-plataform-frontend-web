import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import * as S from "./styled";

import Logo from "../Logo";
import Modal from "../Modal";
import ModalStore from "../ModalStore";

const HeaderMain = ({ address, shop }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenStore, setIsOpenStore] = useState(false);
  const [isOpenProfile, setIsOpenProfile] = useState(false);
  const consumerToken = JSON.parse(localStorage.getItem("consumerToken"));
  const consumerData = JSON.parse(localStorage.getItem("consumerData"));
  const history = useHistory();

  if (!address && !shop) {
    setTimeout(() => setIsOpen(true), 1000);
  }

  function handleShopping() {
    history.push("/carrinho");
  }

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
        <S.Button type="button" onClick={() => handleShopping()}>
          <S.Span>
            <S.BasketIcon /> Carrinho
          </S.Span>
        </S.Button>
        <S.Button type="button" onClick={() => setIsOpenStore(true)}>
          <S.Span>
            <S.StoreIcon /> Petshop
          </S.Span>
        </S.Button>
      </S.IconsWrapper>
      {consumerToken && consumerData ? (
        <S.ProfileWrapper>
          <S.ProfileAvatar
            src={consumerData.avatar}
            onClick={() => setIsOpenProfile(true)}
            onClickCapture={() => setIsOpenProfile(false)}
          />
          <S.ProfileDropdown
            className="dropdown-profile"
            openProfile={isOpenProfile}
          >
            <S.Span>
              <S.ProfileIcon /> Perfil
            </S.Span>
            <S.Span>
              <S.NotificationIcon /> Compras
            </S.Span>
            <S.Span>
              <S.CloseIcon /> Sair
            </S.Span>
          </S.ProfileDropdown>
        </S.ProfileWrapper>
      ) : (
        <S.ButtonLogin href="/entrar">Entrar</S.ButtonLogin>
      )}
      {isOpen && <Modal setIsOpen={setIsOpen} />}
      {isOpenStore && <ModalStore setIsOpenStore={setIsOpenStore} />}
    </S.HeaderWrapper>
  );
};

export default HeaderMain;
