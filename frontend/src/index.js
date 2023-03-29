import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import { UIContextProvider } from "./context/ui-context";
import store from "./redux/store";
import { Provider } from "react-redux";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <UIContextProvider>
        <App />
      </UIContextProvider>
    </Provider>
  </BrowserRouter>
);
