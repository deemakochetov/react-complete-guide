import { configureStore } from "@reduxjs/toolkit";
import cartItemsReducer from "./cart";

const store = configureStore({
  reducer: cartItemsReducer,
});

export default store;
