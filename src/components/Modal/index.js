import React from "react";
import ReactDom from "react-dom";

import * as S from "./styled";

const Modal = ({ setIsOpen }) => {
  function handleClose() {
    setIsOpen(false);
  }

  function submit() {
    handleClose();
  }

  return ReactDom.createPortal(
    <>
      <S.ModalShadow onClick={handleClose} />
      <S.Modal>
        <S.ModalBanner>
          <S.TitleModal>Onde você que receber seu pedido?</S.TitleModal>
        </S.ModalBanner>
        <S.ModalContent>
          <S.Input type="text" name="zipcode" placeholder="Buscar endereço" />
        </S.ModalContent>
        <S.ModalFooter>
          <S.ConfirmButton type="button" onClick={handleClose}>
            Confirmar localização
          </S.ConfirmButton>
        </S.ModalFooter>
      </S.Modal>
    </>,
    document.getElementById("modal-portal")
  );
};

export default Modal;
