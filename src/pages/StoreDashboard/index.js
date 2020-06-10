import React, { useEffect, useState } from "react";
import api from "../../services/api";

import * as S from "../../components/LayoutDashboard/styled";
import * as s from "./styled";

import DashboardHeader from "../../components/DashboardHeader";
import DashboardSideBar from "../../components/DashboardSideBar";
import Footer from "../../components/Footer";
import UpdateProduct from "../../components/UpdateProduct";

const StoreDashboard = () => {
  const shop = JSON.parse(localStorage.getItem("petshop"));
  const [products, setProducts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    async function loadProducts() {
      await api
        .get(`/users/shops/${shop.id}`)
        .then((response) => {
          setProducts(response.data.shop.products);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    loadProducts();
  }, [shop.id]);

  function handleUpdate(product) {
    localStorage.setItem("productId", JSON.stringify(product));
    setIsOpen(true);
  }

  async function handleRemoveProduct(id) {
    await api
      .delete(`products/${id}`)
      .then((response) => {
        console.log(response.statusText);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  }

  return (
    <S.LayoutWrapper>
      <DashboardHeader avatar={shop.avatar} />
      <S.LayoutContent>
        <DashboardSideBar />
        <S.LayoutMain>
          <S.TitlePage>Dashboard - {shop.name}</S.TitlePage>
          <S.TitlePage>Produtos em estoque</S.TitlePage>
          <s.Table>
            <s.TableTbody>
              <s.TableTr>
                <s.TableTh>ID</s.TableTh>
                <s.TableTh>Foto Produto</s.TableTh>
                <s.TableTh>Nome do Produto</s.TableTh>
                <s.TableTh>Descrição</s.TableTh>
                <s.TableTh>Fabricante</s.TableTh>
                <s.TableTh>Preço Unitário</s.TableTh>
                <s.TableTh>Quantidade</s.TableTh>
                <s.TableTh>Ações</s.TableTh>
              </s.TableTr>
              {products ? (
                products.map((product) => (
                  <s.TableTr key={product.id}>
                    <s.TableTd>{product.id}</s.TableTd>
                    <s.TableTd>
                      <s.ProductImage src={product.photo} />
                    </s.TableTd>
                    <s.TableTd>{product.name}</s.TableTd>
                    <s.TableTd>{product.description}</s.TableTd>
                    <s.TableTd>{product.manufacturer}</s.TableTd>
                    <s.TableTd>{product.unityPrice}</s.TableTd>
                    <s.TableTd>{product.quantity}</s.TableTd>
                    <s.TableTd>
                      <s.ButtonRemove
                        type="button"
                        onClick={() => handleUpdate(product)}
                      >
                        Editar
                      </s.ButtonRemove>
                      <s.ButtonRemove
                        type="button"
                        onClick={() => handleRemoveProduct(product.id)}
                      >
                        Excluir
                      </s.ButtonRemove>
                    </s.TableTd>
                  </s.TableTr>
                ))
              ) : (
                <p>Nenhum produto cadastro.</p>
              )}
            </s.TableTbody>
          </s.Table>
          {isOpen && <UpdateProduct setIsOpen={setIsOpen} />}
        </S.LayoutMain>
      </S.LayoutContent>
      <Footer />
    </S.LayoutWrapper>
  );
};

export default StoreDashboard;
