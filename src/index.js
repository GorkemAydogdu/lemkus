import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import { UIContextProvider } from "./context/ui-context";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <UIContextProvider>
      <App />
    </UIContextProvider>
  </BrowserRouter>
);
