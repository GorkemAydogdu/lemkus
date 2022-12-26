import { configureStore } from "@reduxjs/toolkit";

import mobileReducer from "./mobile-slice";

const store = configureStore({
  reducer: { mobile: mobileReducer },
});

export default store;
