import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: []
  },
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(item => item.id == newItem.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...newItem, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter(item => item.id !== itemId);
    },
    increaseItem: (state, action) => {
      const itemId = action.payload;
      const item = state.cartItems.find(item => item.id == itemId);
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseItem: (state, action) => {
      const itemId = action.payload;
      const item = state.cartItems.find(item => item.id == itemId);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.cartItems = state.cartItems.filter(item => item.id !== itemId);
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
    }
  }
});
export const {
  addToCart,
  removeFromCart,
  increaseItem,
  decreaseItem,
  clearCart
} = cartSlice.actions;
export default cartSlice.reducer;