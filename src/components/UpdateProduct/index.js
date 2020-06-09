import React, { useEffect, useState, useMemo } from "react";
import ReactDom from "react-dom";
import api from "../../services/api";

import * as S from "./styled";

import camera from "../../assets/camera.svg";

const UpdateProduct = ({ setIsOpen }) => {
  const productId = JSON.parse(localStorage.getItem("productId"));
  const [thumbnail, setThumbnail] = useState(null);
  const [name, setName] = useState(productId.name);
  const [description, setDescription] = useState(productId.description);
  const [manufacturer, setManufacturer] = useState(productId.manufacturer);
  const [price, setPrice] = useState(productId.unityPrice);
  const [quantity, setQuantity] = useState(productId.quantity);
  const [categories, setCategories] = useState([]);
  const [selectId, setSelectId] = useState(1);

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail]);

  useEffect(() => {
    async function laodCategories() {
      const response = await api.get("categories");

      setCategories(response.data.categories);
    }

    laodCategories();
  }, []);

  function handleClose() {
    setIsOpen(false);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData();
    const shopToken = localStorage.getItem("shopToken");

    data.append("photo", thumbnail);
    data.append("name", name);
    data.append("description", description);
    data.append("manufacturer", manufacturer);
    data.append("unityPrice", price);
    data.append("quantity", quantity);
    data.append("categoryId", selectId);
    data.append("status", "em estoque");

    api.defaults.headers.authorization = `Bearer ${JSON.parse(shopToken)}`;

    const response = await api.patch(`products/${productId.id}`, data);

    console.log(response.statusText);

    window.location.reload();
    localStorage.removeItem("productId");
  }

  return ReactDom.createPortal(
    <>
      <S.ModalShadow onClick={handleClose} />
      <S.Modal>
        <S.ModalBanner>
          <S.TitleModal>Editar Produto</S.TitleModal>
        </S.ModalBanner>
        <S.ModalContent>
          <S.Form
            id="form-update-product"
            className="form-update-product"
            onSubmit={handleSubmit}
          >
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
            <S.Input
              type="text"
              name="name"
              placeholder="Nome do produto"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <S.Label>Descrição:</S.Label>
            <S.TextArea
              name="description"
              rows="5"
              cols="33"
              maxLength="200"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            >
              Descrição do produto
            </S.TextArea>
            <S.Label>Fabricante:</S.Label>
            <S.Input
              type="text"
              placeholder="Fabricante do produto"
              value={manufacturer}
              onChange={(event) => setManufacturer(event.target.value)}
            />
            <S.Label>Preço Unitário:</S.Label>
            <S.Input
              type="text"
              placeholder="Preço do produto"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
            />
            <S.Label>Quantidade:</S.Label>
            <S.Input
              type="text"
              placeholder="Quantidade do produto em estoque"
              value={quantity}
              onChange={(event) => setQuantity(event.target.value)}
            />
            <S.Label>Categoria do Produto:</S.Label>
            <S.Select
              className="select-category"
              value={selectId}
              onChange={(event) => setSelectId(event.target.value)}
            >
              <S.Option>Selecione uma categoria</S.Option>
              {categories &&
                categories.map((category) => (
                  <S.Option key={category.id} value={category.id}>
                    {category.name}
                  </S.Option>
                ))}
            </S.Select>
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
