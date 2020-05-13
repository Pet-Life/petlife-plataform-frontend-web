import React, { useEffect, useState, useMemo } from "react";
import api from "../../services/api";

import * as S from "../../components/LayoutDashboard/styled";
import * as s from "./styled";

import camera from "../../assets/camera.svg";

import DashboardHeader from "../../components/DashboardHeader";
import DashboardSideBar from "../../components/DashboardSideBar";
import Footer from "../../components/Footer";

const DashboardProduct = () => {
  const [thumbnail, setThumbnail] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [categories, setCategories] = useState([]);

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

  categories.map((category) => console.log(category));

  return (
    <S.LayoutWrapper>
      <DashboardHeader />
      <S.LayoutContent>
        <DashboardSideBar />
        <S.LayoutMain>
          <S.TitlePage>Cadastrar Produtos</S.TitlePage>
          <s.Form>
            <s.LabelThumbnail
              id="thumbnail"
              style={{ background: `url(${preview})` }}
              className={thumbnail ? "has-thumbnail" : ""}
            >
              Imagem do Produto:
              <s.Input
                type="file"
                onChange={(event) => setThumbnail(event.target.files[0])}
              />
              <s.Img src={camera} alt="selecione a imagem" />
            </s.LabelThumbnail>
            <s.Label>Nome do Produto:</s.Label>
            <s.Input
              type="text"
              name="name"
              placeholder="Nome do produto"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <s.Label>Descrição:</s.Label>
            <s.TextArea
              name="description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              rows="5"
              cols="33"
              maxLength="200"
            >
              Descrição do produto
            </s.TextArea>
            <s.Label>Fabricante:</s.Label>
            <s.Input
              type="text"
              placeholder="Fabricante do produto"
              value={manufacturer}
              onChange={(event) => setManufacturer(event.target.value)}
            />
            <s.Label>Preço Unitário:</s.Label>
            <s.Input
              type="text"
              placeholder="Preço do produto"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
            />
            <s.Label>Quantidade:</s.Label>
            <s.Input
              type="text"
              placeholder="Quantidade do produto em estoque"
              value={quantity}
              onChange={(event) => setQuantity(event.target.value)}
            />
            <s.Label>Categoria:</s.Label>
            <s.Select className="select-category">
              <s.Option>Selecione uma categoria</s.Option>
              {categories &&
                categories.map((category) => (
                  <s.Option key={category.id}>{category.name}</s.Option>
                ))}
            </s.Select>
            <s.Button type="submit">Cadastrar</s.Button>
          </s.Form>
        </S.LayoutMain>
      </S.LayoutContent>
      <Footer />
    </S.LayoutWrapper>
  );
};

export default DashboardProduct;
