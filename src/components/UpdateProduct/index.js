import React, { useEffect, useState, useMemo } from "react";
import ReactDom from "react-dom";
import { useHistory } from "react-router-dom";
import api from "../../services/api";

import * as S from "./styled";

import camera from "../../assets/camera.svg";

const UpdateProduct = ({ setIsOpen }) => {
  const [thumbnail, setThumbnail] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [categories, setCategories] = useState([]);
  const [selectId, setSelectId] = useState(1);

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail]);

  function handleClose() {
    setIsOpen(false);
  }

  async function handlerSubmit(event) {
    event.preventDefault();
  }

  return ReactDom.createPortal(
    <>
      <S.ModalShadow onClick={handleClose} />
      <S.Modal>
        <S.ModalBanner>
          <S.TitleModal>Editar Produto</S.TitleModal>
        </S.ModalBanner>
        <S.ModalContent>
          <S.Form>
            <S.LabelThumbnail
              id="thumbnail"
              style={{
                background: `url(${preview})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
              className={thumbnail ? "has-thumbnail" : ""}
            >
              Imagem do Produto:
              <S.Input
                type="file"
                onChange={(event) => setThumbnail(event.target.files[0])}
              />
              <S.Img src={camera} alt="selecione a imagem" />
            </S.LabelThumbnail>
            <S.Label>Nome do Produto:</S.Label>
            <S.Input type="text" name="name" placeholder="Nome do produto" />
            <S.Label>Descrição:</S.Label>
            <S.TextArea
              name="description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              rows="5"
              cols="33"
              maxLength="200"
            >
              Descrição do produto
            </S.TextArea>
            <S.Label>Fabricante:</S.Label>
            <S.Input type="text" placeholder="Fabricante do produto" />
            <S.Label>Preço Unitário:</S.Label>
            <S.Input type="text" placeholder="Preço do produto" />
            <S.Label>Quantidade:</S.Label>
            <S.Input
              type="text"
              placeholder="Quantidade do produto em estoque"
            />
            <S.Label>Categoria do Produto:</S.Label>
            <S.Button type="submit">Cadastrar</S.Button>
          </S.Form>
        </S.ModalContent>
        <S.ModalFooter>
          <S.ButtonClose type="button" onClick={() => setIsOpen(false)}>
            Fechar
          </S.ButtonClose>
        </S.ModalFooter>
      </S.Modal>
    </>,
    document.getElementById("modal-portal-update-product")
  );
};

export default UpdateProduct;
