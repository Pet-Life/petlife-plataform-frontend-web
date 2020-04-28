import React, { useEffect, useState } from "react";
import ReactDom from "react-dom";
import api from "../../services/api";

import * as S from "./styled";

const Modal = ({ setIsOpen }) => {
  const [zipcode, setZipCode] = useState("");
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      async function getAddresses() {
        await api
          .post("/adresses", { zipcode })
          .then((response) => {
            setAddresses(response.data.addresses);
          })
          .catch((err) => console.log(err));
      }

      getAddresses();
    }, 2000);

    return () => clearTimeout(timer);
  }, [addresses, zipcode]);

  function handleClose() {
    setIsOpen(false);
  }

  return ReactDom.createPortal(
    <>
      <S.ModalShadow onClick={handleClose} />
      <S.Modal>
        <S.ModalBanner>
          <S.TitleModal>Onde você que receber seu pedido?</S.TitleModal>
        </S.ModalBanner>
        <S.ModalContent>
          <S.Input
            type="text"
            name="zipcode"
            placeholder="Buscar endereço"
            value={zipcode}
            onChange={(event) => setZipCode(event.target.value)}
          />
          <S.List className="list-address">
            {addresses &&
              addresses.map(
                (address) =>
                  address.type !== "Cross Street" &&
                  address.address.municipalitySubdivision !== "" && (
                    <S.ListItem key={address.id}>
                      {address.address.streetName}
                      <br />
                      <S.Span>
                        {address.address.municipalitySubdivision}
                        {", "}
                        {address.address.municipality}
                        {" - "}
                        {address.address.countrySubdivision}
                        {", "}
                        {address.address.country}
                      </S.Span>
                    </S.ListItem>
                  )
              )}
          </S.List>
          <S.ModalFooter>
            <S.ConfirmButton type="button">Confirmar endereço</S.ConfirmButton>
          </S.ModalFooter>
        </S.ModalContent>
      </S.Modal>
    </>,
    document.getElementById("modal-portal")
  );
};

export default Modal;
