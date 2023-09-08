import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./redux";


const authReducer = authSlice.reducer
export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
