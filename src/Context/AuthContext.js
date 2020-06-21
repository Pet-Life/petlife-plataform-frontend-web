import React, { createContext, useEffect, useState } from "react";
import api from "../services/api";
import history from "../history";

const Context = createContext();

function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const shopToken = localStorage.getItem("shopToken");

    if (shopToken) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(shopToken)}`;
      setAuthenticated(true);
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    const consumerToken = localStorage.getItem("consumerToken");

    if (consumerToken) {
      api.defaults.headers.authorization = `Bearer ${JSON.parse(
        consumerToken
      )}`;
      setAuthenticated(true);
    }

    setLoading(false);
  }, []);

  // register a petshop
  async function handleRegisterShop(data, zipcode) {
    await api
      .post("users/shops/signup", {
        name: data.name,
        cnpj: data.cnpj,
        zipcode: zipcode,
        number: data.number,
        email: data.email,
        password: data.password,
      })
      .then((response) => {
        console.log(response.statusCode);
        history.push("/petshop/entrar");
      })
      .catch((response) => console.log(response.statusCode));
  }

  // petshop login
  async function hanldeLoginShop(data) {
    const response = await api.post("users/shops/auth/login", {
      email: data.email,
      password: data.password,
    });

    if (!response) {
      console.log("error login");
    }

    localStorage.setItem("shopToken", JSON.stringify(response.data.token));
    localStorage.setItem("petshop", JSON.stringify(response.data.shop));
    api.defaults.headers.Authorization = `Bearer ${response.data.token}`;
    setAuthenticated(true);

    history.push("/petshop/dashboard");
  }

  // petshop logout
  function handleLogoutShop() {
    setAuthenticated(false);
    localStorage.removeItem("shopToken");
    api.defaults.headers.Authorization = undefined;
    history.push("/petshop/entrar");
  }

  // petshop create product
  async function handleRegisterProduct(data) {
    const response = await api.post("products", {
      photo: data.thumbnail,
      name: data.name,
      description: data.description,
      manufacturer: data.manufacturer,
      unityPrice: data.unityPrice,
      quantity: data.quantity,
      status: "em estoque",
    });

    if (!response) {
      console.log("error login");
    }

    history.push("/petshop/dashboard");
  }

  // consumer register
  async function handleRegisterConsumer(data) {
    await api
      .post("users/consumers/signup", {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
      })
      .then((response) => {
        console.log(response.status, response.statusText);
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  }

  // consumer login
  async function handleLoginConsumer(data) {
    await api
      .post("users/consumers/auth/login", {
        email: data.email,
        password: data.password,
      })
      .then((response) => {
        localStorage.setItem(
          "consumerToken",
          JSON.stringify(response.data.token)
        );
        localStorage.setItem(
          "consumerData",
          JSON.stringify(response.data.consumer)
        );
        api.defaults.headers.authorization = `Bearer ${response.data.token}`;
        console.log(response.status);
        history.push("/principal");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <Context.Provider
      value={{
        authenticated,
        loading,
        handleRegisterShop,
        hanldeLoginShop,
        handleLogoutShop,
        handleRegisterProduct,
        handleRegisterConsumer,
        handleLoginConsumer,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };
