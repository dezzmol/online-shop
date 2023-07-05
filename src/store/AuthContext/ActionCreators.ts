import {AppDispatch} from "../index";
import {login, loginError, loginSuccess} from "./AuthSlice";
import axios from "axios";
import {loginUrl} from "../../constants";

function getErrorMessage(error: unknown) {
    if (error instanceof Error) return error.message
    return String(error)
}

export const userLogin = (username: string, password: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(login)
        const response = await axios.post(loginUrl, {
            username,
            password
        })
        dispatch(loginSuccess(true))
        localStorage.setItem('isAuth', 'true')
        localStorage.setItem('token', response.data.token)
    } catch (e) {
        dispatch(loginSuccess(false))
        dispatch(loginError(getErrorMessage(e)))
    }
}

export const userReg = (username: string, password: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(login)
        dispatch(loginSuccess(true))
        localStorage.setItem('isAuth', 'true')
    } catch (e) {
        dispatch(loginSuccess(false))
        dispatch(loginError(getErrorMessage(e)))
    }
}

export const isLog = () => (dispatch: AppDispatch) => {
    try {
        if (localStorage.getItem('isAuth') === 'true') {
            dispatch(loginSuccess(true))
        } else {
            dispatch(loginSuccess(false))
        }


    } catch (e) {
        dispatch(loginSuccess(false))
        dispatch(loginError(getErrorMessage(e)))
    }
}