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
    wishList: [],
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
      state.wishList = info_user.wishList
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
export const wishListSlice = createSlice({
  name: "wishList",
  initialState: {
    wishList: [],

  },
  reducers: {
    addWishList: (state, action) => {
      const itemInWishList = state.wishList.findIndex((item) => item._id === action.payload._id)
      if (itemInWishList) {
        
      }
    }
  }
})
export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemKey = `${action.payload._id}-${action.payload.nameSize}`;
      const itemInCartIndex = state.cart.findIndex((item) => item.key === itemKey);
    
      if (itemInCartIndex !== -1) {
        const existingItem = state.cart[itemInCartIndex];
    
        if (existingItem.nameSize === action.payload.nameSize) {
          // Nếu đã có sản phẩm với cùng ID và nameSize trong giỏ hàng, cập nhật số lượng và tổng cộng.
          existingItem.count += action.payload.count;
          existingItem.total += action.payload.total;
        } else {
          // Nếu đã có sản phẩm với cùng ID nhưng khác nameSize, tạo một sản phẩm mới với nameSize mới.
          state.cart.push({ ...action.payload, key: itemKey });
        }
      } else {
        // Nếu không có sản phẩm nào với ID và nameSize tương tự, thêm sản phẩm mới vào giỏ hàng.
        state.cart.push({ ...action.payload, key: itemKey });
      }
    },
  
    
    
    removeCart: (state, action) => {
      const removeFromCart = state.cart.filter(
        (item) => item._id !== action.payload._id
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

export const PaySlice = createSlice({
  name: 'pays',
  initialState:{
    pays:[],
  },
  reducers:{
    addToSelectedItems: (state, action) => {
      state.pays.push(action.payload);
    },
  }
})

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;

export const {
  addToSelectedItems
} = PaySlice.actions

// export default cartSlice.reducer;

export const { login } = authSlice.actions;
export const { logout } = authSlice.actions;

// export default authSlice.reducer;
