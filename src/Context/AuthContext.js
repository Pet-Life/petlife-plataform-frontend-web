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
      api.defaults.headers.authorization = `Bearer ${JSON.parse(shopToken)}`;
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
        email: data.email,
        password: data.password,
      })
      .then((response) => console.log(response.data))
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
    api.defaults.headers.authorization = `Bearer ${response.data.token}`;
    setAuthenticated(true);

    history.push("/petshop/dashboard");
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

  // petshop loading products
  async function loadProducts(id) {
    await api
      .get("products", { id: id })
      .then((response) => console.log)
      .catch(console.log);
  }

  return (
    <Context.Provider
      value={{
        authenticated,
        loading,
        handleRegisterShop,
        hanldeLoginShop,
        handleRegisterProduct,
        loadProducts,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };
