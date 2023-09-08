import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    username: "",
    email: "",
    password: "",
    avata: "",
    token: "",
    id: "",
    isLogin: false,
  },
  reducers: {
    login: (state, action) => {
      const { info_user, accessToken } = action.payload;
      state.username = info_user.username;
      state.email = info_user.email;
      state.password = info_user.password;
      state.avata = info_user.avata;
      state.token = accessToken;
      state.id = info_user._id;
      state.isLogin = true;
    },
    logout: (state, action)=> {
        state.username = "";
        state.email = "";
        state.password = "";
        state.avata = "";
        state.token = "";
        state.id = "";
        state.isLogin = false;
      }
  },
});
export const { login } = authSlice.actions;
export const { logout } = authSlice.actions;

export default authSlice.reducer;