import React, { useState } from "react";
import ReactDom from "react-dom";
//import api from "../../services/api";

import logo from "../../assets/logo.png";

import * as S from "./styled";

const Modal = ({ setIsOpen }) => {
  const [visi, setVisi] = useState(true);
  const [zipcode, setZipCode] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [district, setDistrict] = useState("");
  const [complement, setComplement] = useState("");
  const [city, setCity] = useState("");
  const [state, steState] = useState("");

  function handleClose() {
    setIsOpen(false);
  }

  async function handlerSubmit(event) {
    event.preventDefault();

    /*await api.post("/adresses", { zipcode }).then((response) => {
      const { address } = response.data.address;

      setStreet(address.street);
      setComplement(address.complement);
      setDistrict(address.district);
      setCity(address.city);
      steState(address.state);
    });*/
    setTimeout(() => {
      setVisi(false);
    }, 2500);
  }

  return ReactDom.createPortal(
    <>
      <S.ModalShadow onClick={handleClose} />
      <S.Modal>
        <S.ModalBanner>
          <S.TitleModal>Onde você que receber seu pedido?</S.TitleModal>
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
            </S.FormContent>

            <S.FormContent secondary className="secondary" visi={visi}>
              <S.Input
                type="text"
                id="street"
                name="street"
                placeholder="Logradouro"
                autoComplete="none"
                value={street}
                onChange={(event) => setStreet(event.target.value)}
              />
              <S.Input
                type="text"
                id="number"
                name="number"
                placeholder="Número"
                autoComplete="none"
                value={number}
                onChange={(event) => setNumber(event.target.value)}
              />
              <S.Input
                type="text"
                id="district"
                name="district"
                placeholder="Bairro"
                autoComplete="none"
                value={district}
                onChange={(event) => setDistrict(event.target.value)}
              />
              <S.Input
                type="text"
                id="complement"
                name="complement"
                placeholder="Complemento"
                autoComplete="none"
                value={complement}
                onChange={(event) => setComplement(event.target.value)}
              />
              <S.Input
                type="text"
                id="city"
                name="city"
                placeholder="Cidade"
                autoComplete="none"
                value={city}
                onChange={(event) => setCity(event.target.value)}
              />
              <S.Input
                type="text"
                id="state"
                name="state"
                placeholder="Estado"
                autoComplete="none"
                value={state}
                onChange={(event) => steState(event.target.value)}
              />
            </S.FormContent>
            <S.FormContent>
              <S.ConfirmButton type="submit">Buscar</S.ConfirmButton>
            </S.FormContent>
          </S.FormWrapper>
          <S.StoreWrapper visi={visi}>
            <S.Title>Selecione um Pet Shop</S.Title>
            <S.StoreContent>
              <S.StoreDetalh>
                <S.StoreLogo src={logo} />
                <S.StoreText>
                  Rua Nossa Senhora da Lapa, 270 São Paulo - SP
                </S.StoreText>
              </S.StoreDetalh>
              <S.StoreDetalh>
                <S.StoreLogo src={logo} />
                <S.StoreText>
                  Rua Nossa Senhora da Lapa, 270 São Paulo - SP
                </S.StoreText>
              </S.StoreDetalh>
            </S.StoreContent>
          </S.StoreWrapper>
        </S.ModalContent>
      </S.Modal>
    </>,
    document.getElementById("modal-portal")
  );
};

export default Modal;
