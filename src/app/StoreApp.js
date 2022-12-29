import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "../features/cartAppSlice.js";

export const store = configureStore({
  reducer: { cart: cartReducer },
});
