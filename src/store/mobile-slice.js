import { createSlice } from "@reduxjs/toolkit";

const initialMobileState = {
  isActive: false,
};

const mobileSlice = createSlice({
  name: "mobile",
  initialState: initialMobileState,
  reducers: {
    toggleButton: (state) => {
      state.isActive = !state.isActive;
    },
  },
});

export const mobileActions = mobileSlice.actions;

export default mobileSlice.reducer;
