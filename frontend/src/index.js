import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import { UIContextProvider } from "./context/ui-context";
// import { MenuContextProvider } from "./context/menu-context";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <UIContextProvider>
      {/* <MenuContextProvider> */}
      <App />
      {/* </MenuContextProvider> */}
    </UIContextProvider>
  </BrowserRouter>
);
