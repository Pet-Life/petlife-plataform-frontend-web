import React, { useEffect, useState } from "react";
import ReactDom from "react-dom";
import api from "../../services/api";

import * as S from "./styled";

const ModalStore = ({ setIsOpenStore }) => {
  const [shop, setShop] = useState({});
  const id = sessionStorage.getItem("shopId");

  useEffect(() => {
    async function loadShops() {
      await api
        .get(`/users/shops/${id}`)
        .then((response) => {
          setShop(response.data.shop);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    loadShops();
  }, [id]);

  console.log(shop);

  function handleClose() {
    setIsOpenStore(false);
  }

  return ReactDom.createPortal(
    <>
      <S.ModalShadow onClick={handleClose} />
      <S.Modal>
        <S.ModalBanner>
          <S.TitleModal>Você está comprando no Pet Shop</S.TitleModal>
        </S.ModalBanner>
        <S.ModalContent>
          <S.Content>
            <S.StoreLogo src={shop.avatar} />
            <S.Text>
              <S.Span>Nome do Petshop:</S.Span>
              <br /> {shop.name}
            </S.Text>
            <S.Text>
              <S.Span>CNPJ:</S.Span>
              <br /> {shop.cnpj}
            </S.Text>
          </S.Content>
          <S.ContentSecondary>
            <S.Text>
              <S.Span>Endereco:</S.Span>
              <br />
              {shop.street}, {shop.district}, {shop.city} - {shop.state}
            </S.Text>
            <S.Text>
              <S.Span>Telefone:</S.Span>
              <br />
              (00) 00000-000
            </S.Text>
          </S.ContentSecondary>
          <S.ContentSecondary>
            <S.Text>
              <S.Span>Horário de Funcionamento:</S.Span>
              <br />
              {shop.businessHours}
            </S.Text>
          </S.ContentSecondary>
        </S.ModalContent>
        <S.ModalFooter>
          <S.ConfirmClose type="button" onClick={handleClose}>
            Fechar
          </S.ConfirmClose>
        </S.ModalFooter>
      </S.Modal>
    </>,
    document.getElementById("modal-portal-store")
  );
};

export default ModalStore;
