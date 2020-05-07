import React from "react";

import GlobalStyles from "./styles/globalStyle";
import Routes from "./routes";

function App() {
  return (
    <>
      <GlobalStyles />
      <div id="modal-portal" />
      <div id="modal-portal-store" />
      <Routes />
    </>
  );
}

export default App;
