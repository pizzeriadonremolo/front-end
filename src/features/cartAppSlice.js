import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartTotalAmount: 0,
};


const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    resetTotalAmount(state, payload) {
      state.cartTotalAmount =
        state.cartItems.reduce(
          (acc, curr) => acc + curr.price * curr.cartQuantity,
          0
        ) || 0;
    },
    addToCart(state, { payload }) {
      const i = state.cartItems.findIndex((item) => item.id === payload.id);
      if (i < 0 && parseInt(payload.cartQuantity)) {
        state.cartItems.push(payload);
    

      }
      if (i >= 0) {
        if (!parseInt(payload.cartQuantity)) {
          const nextCartItems = state.cartItems.filter(
            (cartItem) => cartItem.id !== payload.id
          );
          state.cartTotalAmount -= payload.price;
          state.cartItems = nextCartItems;
        } else {
          state.cartItems[i].cartQuantity = payload.cartQuantity;
          state.cartTotalAmount = payload.price * payload.cartQuantity;
        }
      }
    },
    removeFromCart(state, action) {
      console.log('ssada');
      const nextCartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
      state.cartItems = nextCartItems;
      state.cartTotalAmount -=
        action.payload.price * action.payload.cartQuantity;
    },
    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
        state.cartTotalAmount -= action.payload.price;
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        );
        state.cartItems = nextCartItems;
        state.cartTotalAmount -= action.payload.price;
      }
    },
    clearCart(state, action) {
      state.cartItems = [];
      state.cartTotalAmount = 0;
    },
  },
});
export const { addToCart, removeFromCart, decreaseCart, clearCart , resetTotalAmount} =
  cartSlice.actions;
export default cartSlice.reducer;
