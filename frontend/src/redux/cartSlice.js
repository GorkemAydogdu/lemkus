import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  items: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) =>
          item._id === newItem._id && item.clickedSize === newItem.clickedSize
      );
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          _id: newItem._id,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          images: newItem.images,
          clickedSize: newItem.clickedSize,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + existingItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const itemToRemove = action.payload;
      const existingItem = state.items.find(
        (item) => item._id === itemToRemove._id
      );
      state.totalQuantity--;
      if (existingItem.quantity > 1) {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      } else {
        state.items = state.items.filter(
          (item) => item._id !== itemToRemove._id
        );
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
