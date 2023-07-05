import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface AuthState {
    Auth: boolean;
    isLoading: boolean;
    error: string;
}

interface LoginState {
    username: string;
    password: string;
}

const initialState: AuthState = {
    Auth: false,
    isLoading: false,
    error: ''
}

const AuthSlice = createSlice({
    name: 'Auth',
    initialState,
    reducers: {
        login: (state, action:PayloadAction<AuthState>) => {
            state.isLoading = true;
        },
        loginSuccess:(state, action:PayloadAction<boolean>) => {
            state.isLoading = false
            state.error = ''
            state.Auth = action.payload
        },
        loginError: (state, action:PayloadAction<string>) => {
            state.isLoading = false
            state.error = action.payload
        },
        logout: (state, action:PayloadAction<boolean>) => {
            state.Auth = action.payload;
            state.error = '';
            state.isLoading = false;
            localStorage.setItem('isAuth', 'false');
            localStorage.removeItem('token');
        }
    }
})

export const {login, loginSuccess, loginError, logout} = AuthSlice.actions

export default AuthSlice.reducer;