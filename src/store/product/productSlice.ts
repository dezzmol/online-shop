import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IProduct} from "../../types";

interface ProductState {
    products: IProduct[]
    isLoading: boolean;
    error: string;
}

const initialState: ProductState = {
    products: [],
    isLoading: false,
    error: ""
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        productFetching: (state) => {
            state.isLoading = true;

        },
        productFetchingSuccess: (state, action: PayloadAction<IProduct[]>) => {
            state.isLoading = false;
            state.error = '';
            state.products = action.payload
        },
        productFetchingError: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload
        },

    }
})

export const {productFetching, productFetchingSuccess, productFetchingError}  = productSlice.actions

export default productSlice.reducer