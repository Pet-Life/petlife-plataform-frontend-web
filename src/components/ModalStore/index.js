import React from "react";
import ReactDom from "react-dom";

import * as S from "./styled";

import logo from "../../assets/logo.png";

const ModalStore = ({ setIsOpenStore }) => {
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
            <S.StoreLogo src={logo} />
            <S.Text>
              <S.Span>Nome do Petshop:</S.Span>
              <br /> Petshop Jaraguá
            </S.Text>
            <S.Text>
              <S.Span>CNPJ:</S.Span>
              <br /> 00.000.000/0000-00
            </S.Text>
          </S.Content>
          <S.ContentSecondary>
            <S.Text>
              <S.Span>Endereco:</S.Span>
              <br />
              Rua Lorenzo Latorre 124, Vila Aurora
              <br />
              São Paulo - SP - 05186120
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
              Segunda a Sexta-Feira da 08h às 19h
            </S.Text>
          </S.ContentSecondary>
          <S.ContentSecondary>
            <S.Text>
              <S.Span>Pagamento Online:</S.Span>
              <br />
              Pickpay
            </S.Text>
            <S.Text>
              <S.Span>Pagamento na entrega:</S.Span>
              <br />
              Dinheiro
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
