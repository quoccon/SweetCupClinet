import { createSlice } from "@reduxjs/toolkit";
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

export const {addToCart, removeFromCart,incrementQuantity,decrementQuantity} =cartSlice.actions;

export default cartSlice.reducer;