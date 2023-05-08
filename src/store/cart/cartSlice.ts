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
            const object = action.payload;
            const objectExist = state.cartItems.some((item) => item.productId === object.productId)
            if (!objectExist) {
                state.cartItems.push(object)
            }
        },
        removeFromCart: (state, action:PayloadAction<ICartItem>) => {
            state.cartItems = state.cartItems.filter(item => item.productId !== action.payload.productId)
        },
        changeCount: (state, action:PayloadAction<ICartItem>) => {
            state.cartItems.map(cartitem => {
                    if (cartitem.productId === action.payload.productId) {
                        cartitem.count = action.payload.count;
                    }
                }
            )
        }
    }
})

export const {addToCart, removeFromCart, changeCount} = cartSlice.actions

export default cartSlice.reducer;