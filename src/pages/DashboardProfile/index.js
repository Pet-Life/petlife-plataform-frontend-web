import React, { useEffect, useState } from "react";

import * as S from "../../components/LayoutDashboard/styled";
import * as s from "./styled";

import DashboardHeader from "../../components/DashboardHeader";
import DashboardSideBar from "../../components/DashboardSideBar";
import Footer from "../../components/Footer";

const DashboardProfile = () => {
  const petshop = JSON.parse(localStorage.getItem("petshop"));
  const [shop, setShop] = useState({});

  useEffect(() => {
    async function loadShop() {
      setShop(petshop);
    }
    loadShop();
  }, [petshop]);

  return (
    <S.LayoutWrapper>
      <DashboardHeader avatar={shop.avatar} />
      <S.LayoutContent>
        <DashboardSideBar />
        <S.LayoutMain>
          <S.TitlePage>Meus dados</S.TitlePage>
          <s.Text>
            <s.Span>Nome do Petshop:</s.Span> {shop.name}
          </s.Text>
          <s.Text>
            <s.Span>E-mail:</s.Span> {shop.email}
          </s.Text>
          <s.Text>
            <s.Span>CNPJ: </s.Span>
            {shop.cnpj}
          </s.Text>
          <s.Text>
            <s.Span>Telefone: </s.Span> {shop.phone}
          </s.Text>
          <s.Text>
            <s.Span>Endereço:</s.Span>
          </s.Text>
          <s.Text>
            {shop.street} {shop.number}, {shop.district}, {shop.city} -{" "}
            {shop.state}
          </s.Text>
          <s.Text>
            <s.Span>Horário de Funcionamento:</s.Span>
          </s.Text>
          <s.Text>{shop.businessHours}</s.Text>
        </S.LayoutMain>
      </S.LayoutContent>
      <Footer />
    </S.LayoutWrapper>
  );
};

export default DashboardProfile;
