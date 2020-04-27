import React from "react";
import PropTypes from "prop-types";

import * as S from "./styled";

import Title from "../Title";

const Modal = ({ open }) => {
  return (
    <S.ModalWrapper id="modal-search" open={open}>
      <S.ModalContent id="modal-content-search">
        <Title title="Onde você que receber seu pedido?" />
        <S.FormContent>
          <S.SearchIcon />
          <S.Input type="text" placeholder="Buscar endereço" />
        </S.FormContent>
      </S.ModalContent>
    </S.ModalWrapper>
  );
};

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default Modal;
