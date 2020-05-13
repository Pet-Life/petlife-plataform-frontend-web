import React, { useState, useMemo } from "react";

import * as S from "../../components/LayoutDashboard/styled";
import * as s from "./styled";

import camera from "../../assets/camera.svg";

import DashboardHeader from "../../components/DashboardHeader";
import DashboardSideBar from "../../components/DashboardSideBar";
import Footer from "../../components/Footer";

const DashboardProfile = () => {
  const [thumbnail, setThumbnail] = useState(null);

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail]);

  return (
    <S.LayoutWrapper>
      <DashboardHeader />
      <S.LayoutContent>
        <DashboardSideBar />
        <S.LayoutMain>
          <S.TitlePage>Meus dados</S.TitlePage>
          <s.Form>
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
            <s.Input type="text" placeholder="nome do seu petshop" />
            <s.Label>CNPJ:</s.Label>
            <s.Input type="text" placeholder="CNPJ do seu petshop" />
            <s.Label>Telefone:</s.Label>
            <s.Input type="text" placeholder="Telefone do seu petshop" />
            <s.Label>Horário de Funcionamento:</s.Label>
            <s.Input
              type="text"
              placeholder="Horário de funcionamento do seu petshop"
            />
          </s.Form>
        </S.LayoutMain>
      </S.LayoutContent>
      <Footer />
    </S.LayoutWrapper>
  );
};

export default DashboardProfile;
