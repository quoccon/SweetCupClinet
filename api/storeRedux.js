import { configureStore } from "@reduxjs/toolkit";
import { authSlice, cartSlice } from "./redux";


const authReducer = authSlice.reducer
const cartReducer = cartSlice.reducer
export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart:cartReducer
  },
});
