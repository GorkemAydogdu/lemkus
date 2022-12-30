import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import { ThemeContextProvider } from "./context/theme-context";
import { MenuContextProvider } from "./context/menu-context";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <MenuContextProvider>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </MenuContextProvider>
  </BrowserRouter>
);
