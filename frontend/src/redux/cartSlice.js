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
          item.productId === newItem.productId &&
          item.clickedSize === newItem.clickedSize
      );
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          productId: newItem.productId,
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
    removeItemFromCart(state, action) {},
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
