import React from "react";

import GlobalStyles from "./styles/globalStyle";
import Routes from "./routes";

function App() {
  return (
    <>
      <GlobalStyles />
      <div id="modal-portal" />
      <Routes />
    </>
  );
}

export default App;
