import React, { useState, useMemo } from "react";
import api from "../../services/api";

import * as S from "../../components/LayoutDashboard/styled";
import * as s from "./styled";

import camera from "../../assets/camera.svg";

import DashboardHeader from "../../components/DashboardHeader";
import DashboardSideBar from "../../components/DashboardSideBar";
import Footer from "../../components/Footer";

const DashboardSettings = ({ history }) => {
  const shop = JSON.parse(localStorage.getItem("petshop"));
  const [thumbnail, setThumbnail] = useState(null);
  const [name, setName] = useState(shop.name);
  const [email, setEmail] = useState(shop.email);
  const [cnpj, setCnpj] = useState(shop.cnpj);
  const [phone, setPhone] = useState(shop.phone);
  const [delivery, setDelivery] = useState("");
  const [business, setBusiness] = useState([]);

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail]);

  async function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData();
    const shopToken = localStorage.getItem("shopToken");

    data.append("avatar", thumbnail);
    data.append("name", name);
    data.append("email", email);
    data.append("cpnj", cnpj);
    data.append("phone", phone);
    data.append("delivery", delivery);
    data.append("business", business);

    api.defaults.headers.authorization = `Bearer ${JSON.parse(shopToken)}`;

    const response = await api.patch(`users/shops/${shop.id}`, data);

    console.log(response.statusText);

    localStorage.setItem("petshop", JSON.stringify(response.data.shop));
    history.push("/petshop/dashboard");
  }

  return (
    <S.LayoutWrapper>
      <DashboardHeader avatar={shop.avatar} />
      <S.LayoutContent>
        <DashboardSideBar />
        <S.LayoutMain>
          <S.TitlePage>Alterar Meus dados</S.TitlePage>
          <s.Form
            id="form-update-shop"
            className="form-update-shop"
            onSubmit={handleSubmit}
          >
            <s.LabelThumbnail
              id="thumbnail"
              style={{ background: `url(${preview})` }}
              className={thumbnail ? "has-thumbnail" : ""}
            >
              Logo do meu Petshop:
              <s.Input
                type="file"
                onChange={(event) => setThumbnail(event.target.files[0])}
              />
              <s.Img src={camera} alt="selecione a imagem" />
            </s.LabelThumbnail>
            <s.Label>Nome do Petshop:</s.Label>
            <s.Input
              type="text"
              placeholder="nome do seu petshop"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <s.Label>E-mail:</s.Label>
            <s.Input
              type="email"
              placeholder="Seu e-mail"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <s.Label>CNPJ:</s.Label>
            <s.Input
              type="text"
              placeholder="CNPJ do seu petshop"
              value={cnpj}
              onChange={(event) => setCnpj(event.target.value)}
            />
            <s.Label>Telefone:</s.Label>
            <s.Input
              type="text"
              placeholder="Telefone do seu petshop"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
            <s.Label>Tipo de Delivery:</s.Label>
            <s.Input
              type="text"
              placeholder="Delivery de seu petshop"
              value={delivery}
              onChange={(event) => setDelivery(event.target.value)}
            />
            <s.Label>Horário de Funcionamento:</s.Label>
            <s.Input
              type="text"
              placeholder="Horário de funcionamento do seu petshop"
              value={business}
              onChange={(event) => setBusiness(event.target.value)}
            />
            <s.Button type="submit">Atulizar dados</s.Button>
          </s.Form>
        </S.LayoutMain>
      </S.LayoutContent>
      <Footer />
    </S.LayoutWrapper>
  );
};

export default DashboardSettings;
