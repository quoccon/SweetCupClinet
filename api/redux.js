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


export const cartSlice = createSlice({
  name: "cart",
  initialState: {
      cart:[],
  },
  reducers: {
      addToCart: (state, action) => {
          const itemInCart = state.cart.find((item) => item.id == action.payload.id);
          if(itemInCart) {
              itemInCart.quantity++;
          }else {
              state.cart.push({...action.payload,quantity:1});
          }
      },
      removeCart:(state,action) => {
           const removeFromCart = state.cart.filter((item) => item.id !== action.payload.id);
           state.cart = removeFromCart;

      },
      incrementQuantity: (state, action) => {
          const itemCart = state.cart.find((item) => item.id !== action.payload.id);
          itemCart.quantity++;
      },
      decrementQuantity: (state, action) => {
          const itemCart = state.cart.find((item) => item.id == action.payload.id);
          if(itemCart.quantity == 1) {
              const removeFromCart = state.cart.filter((item) => item.id !== action.payload.id);
           state.cart = removeFromCart;
          }else{
              itemCart.quantity--;
          }
      } 


  }
});

export const {addToCart, removeFromCart,incrementQuantity,decrementQuantity} = cartSlice.actions;

// export default cartSlice.reducer;

export const { login } = authSlice.actions;
export const { logout } = authSlice.actions;

// export default authSlice.reducer;