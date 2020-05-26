import React, { createContext, useState } from "react";
import api from "../services/api";

const Context = createContext();

function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);

  async function handleRegisterShop(data) {
    await api
      .post("users/shops/signup", data)
      .then((response) => console.log(response.data))
      .catch((response) => console.log(response.statusCode));
  }

  return (
    <Context.Provider value={{ authenticated, handleRegisterShop }}>
      {children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };
