import {configureStore} from "@reduxjs/toolkit";
import cartSlice from "./cart/cartSlice";
import productSlice from "./product/productSlice";
import authSlice from "./AuthContext/AuthSlice";


export const store = configureStore({
    reducer: {
        cart: cartSlice,
        product: productSlice,
        auth: authSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch