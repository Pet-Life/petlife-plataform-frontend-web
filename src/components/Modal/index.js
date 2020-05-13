import React, { useState } from "react";
import ReactDom from "react-dom";
import { useHistory } from "react-router-dom";
import api from "../../services/api";

import * as S from "./styled";

import CardStore from "../CardStore";

const Modal = ({ setIsOpen }) => {
  const [visi, setVisi] = useState(false);
  const [zipcode, setZipCode] = useState("");
  const [shops, setShops] = useState([]);
  const [address, setAddress] = useState({});
  const history = useHistory();

  function handleClose() {
    setIsOpen(false);
  }

  async function handlerSubmit(event) {
    event.preventDefault();

    await api
      .post("/search", { zipcode })
      .then((response) => {
        setAddress(response.data.address);
        setShops(response.data.shops);
      })
      .catch((err) => {
        console.log(err);
      });
    setVisi(true);
  }

  function handlerStore(e, id) {
    e.preventDefault();
    sessionStorage.setItem("user", address.address.street);
    sessionStorage.setItem("shopId", id);
    handleClose();
    history.push("/principal");
  }

  return ReactDom.createPortal(
    <>
      <S.ModalShadow onClick={handleClose} />
      <S.Modal>
        <S.ModalBanner>
          <S.TitleModal>
            Buscar Petshops proximo a minha localização
          </S.TitleModal>
        </S.ModalBanner>
        <S.ModalContent>
          <S.FormWrapper onSubmit={handlerSubmit}>
            <S.FormContent>
              <S.Input
                type="text"
                id="zipcode"
                name="zipcode"
                placeholder="CEP"
                autoComplete="none"
                autoCorrect="none"
                autoSave="none"
                value={zipcode}
                onChange={(event) => setZipCode(event.target.value)}
              />
              <S.ConfirmButton type="submit">Buscar</S.ConfirmButton>
            </S.FormContent>
          </S.FormWrapper>
          <S.LinkText
            href="http://www.buscacep.correios.com.br/sistemas/buscacep/"
            target="_blank"
          >
            Nao sei meu CEP
          </S.LinkText>
          <S.StoreWrapper visi={visi}>
            <S.StoreTitle>Selecione um Petshop</S.StoreTitle>
            <br />
            {shops.length !== 0 && shops ? (
              shops.map((shop) => (
                <S.ButtonConfirmStore
                  key={shop.id}
                  type="button"
                  onClick={(e) => handlerStore(e, shop.id)}
                >
                  <CardStore
                    logo={shop.avatar}
                    name={shop.name}
                    text={
                      shop.street +
                      ", " +
                      shop.district +
                      ", " +
                      shop.city +
                      " - " +
                      shop.state
                    }
                  />
                </S.ButtonConfirmStore>
              ))
            ) : (
              <p>Nenhum petshop encontrado</p>
            )}
          </S.StoreWrapper>
        </S.ModalContent>
      </S.Modal>
    </>,
    document.getElementById("modal-portal")
  );
};

export default Modal;
