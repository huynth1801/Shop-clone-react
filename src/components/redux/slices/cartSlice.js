import { createSlice } from "@reduxjs/toolkit";

// Khởi tạo state cho slide, có thể kèm giá trị mặc định ban đầu.
const initialState = {
  cartItems: [],
  totalAmount: 0,
  totalQuantity: 0,
};

// Cấu hình slice
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );

      state.totalQuantity++;
      if (!existingItem) {
        state.cartItems.push({
          id: newItem.id,
          productName: newItem.productName,
          image: newItem.imgUrl,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) + Number(newItem.price);
      }

      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity)
      );

      console.log(state.totalQuantity);
      console.log(state.cartItems);
      console.log(newItem);
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
