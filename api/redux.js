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
    balance: "",
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
      state.balance = info_user.balance
      state.isLogin = true;
    },
    logout: (state, action) => {
      state.username = "";
      state.email = "";
      state.password = "";
      state.avata = "";
      state.token = "";
      state.id = "";
      state.isLogin = false;
    },
  },
});

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemKey = `${action.payload._id}-${action.payload.nameSize}`;
      const itemInCart = state.cart.find((item) => item.key === itemKey);
      console.log(itemInCart);
      if (itemInCart) {
        // Cập nhật số lượng và tổng tiền
        itemInCart.count += action.payload.count;
        itemInCart.total += action.payload.total;
      } else {
        // Thêm sản phẩm mới vào giỏ hàng
        state.cart.push({ ...action.payload, key: itemKey });
      }
    },

    removeCart: (state, action) => {
      const removeFromCart = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      state.cart = removeFromCart;
    },
    incrementQuantity: (state, action) => {
      const itemCart = state.cart.find((item) => item.id !== action.payload.id);
      itemCart.count++;
    },
    decrementQuantity: (state, action) => {
      const itemCart = state.cart.find((item) => item.id == action.payload.id);
      if (itemCart.count == 1) {
        const removeFromCart = state.cart.filter(
          (item) => item.id !== action.payload.id
        );
        state.cart = removeFromCart;
      } else {
        itemCart.count--;
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;

// export default cartSlice.reducer;

export const { login } = authSlice.actions;
export const { logout } = authSlice.actions;

// export default authSlice.reducer;
