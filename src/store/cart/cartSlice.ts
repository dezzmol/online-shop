import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICartItem, IProduct} from "../../types";

interface CartState {
    cartItems: ICartItem[];
}

const initialState: CartState = {
    cartItems: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action:PayloadAction<ICartItem>) => {
            state.cartItems.push(action.payload)
        },
        removeFromCart: (state, action:PayloadAction<ICartItem>) => {
            state.cartItems = state.cartItems.filter(item => item !== action.payload)
        }
    }
})

export const {addToCart, removeFromCart} = cartSlice.actions

export default cartSlice.reducer;