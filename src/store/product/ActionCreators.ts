import {AppDispatch} from "../index";
import axios from "axios";
import {IProduct} from "../../types";
import {productFetching, productFetchingError, productFetchingSuccess} from "./productSlice";
import {productUrl} from "../../constants";

function getErrorMessage(error: unknown) {
    if (error instanceof Error) return error.message
    return String(error)
}

export const fetchProducts = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(productFetching)
        const response = await axios.get<IProduct[]>(productUrl)
        dispatch(productFetchingSuccess(response.data))
    } catch (e) {
        dispatch(productFetchingError(getErrorMessage(e)))
    }
}