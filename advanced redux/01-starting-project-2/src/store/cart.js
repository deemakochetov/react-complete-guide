import { createSlice } from "@reduxjs/toolkit";

const initialCartState = { cartItems: {}, showCart: false };

const cartItemsSlice = createSlice({
  name: "cartItems",
  initialState: initialCartState,
  reducers: {
    addItem(state, action) {
      const item = action.payload;
      const { id } = item;
      if (id in state.cartItems) {
        state.cartItems[id].amount++;
      } else {
        state.cartItems[id] = { ...item, amount: 1 };
      }
    },
    removeItem(state, action) {
      const item = action.payload;
      const { id } = item;
      if (id in state.cartItems) {
        state.cartItems[id].amount--;
        if (state.cartItems[id].amount <= 0) {
          delete state.cartItems[id];
        }
      }
    },
    showCart(state) {
      state.showCart = true;
    },
    hideCart(state) {
      state.showCart = false;
    },
  },
});

export const cartItemsActions = cartItemsSlice.actions;
export default cartItemsSlice.reducer;
