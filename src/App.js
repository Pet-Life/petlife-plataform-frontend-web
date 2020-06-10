import React from "react";
import { HelmetProvider } from "react-helmet-async";

import { AuthProvider } from "./Context/AuthContext";
import CartContextProvider from "./Context/CartContext";

import GlobalStyles from "./styles/globalStyle";
import Routes from "./routes";

function App() {
  return (
    <HelmetProvider>
      <AuthProvider>
        <CartContextProvider>
          <GlobalStyles />
          <div id="modal-portal" />
          <div id="modal-portal-store" />
          <div id="modal-portal-update-product" />
          <div id="loading" />
          <Routes />
        </CartContextProvider>
      </AuthProvider>
    </HelmetProvider>
  );
}

export default App;
