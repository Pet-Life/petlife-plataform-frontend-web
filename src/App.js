import React from "react";

import { AuthProvider } from "./Context/AuthContext";

import GlobalStyles from "./styles/globalStyle";
import Routes from "./routes";

function App() {
  return (
    <AuthProvider>
      <GlobalStyles />
      <div id="modal-portal" />
      <div id="modal-portal-store" />
      <div id="modal-portal-update-product" />
      <div id="loading" />
      <Routes />
    </AuthProvider>
  );
}

export default App;
