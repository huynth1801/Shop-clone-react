import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";

const store = configureStore({
  reducer: {
    // Khai báo 1 slide tên là cart với giá trị cartSlice đươc export
    cart: cartSlice,
  },
});

export default store;
