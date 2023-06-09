import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface AuthState {
    Auth: boolean;
}

const initialState: AuthState = {
    Auth: false
}

const AuthSlice = createSlice({
    name: 'Auth',
    initialState,
    reducers: {
        setAuth: (state, action:PayloadAction<AuthState>) => {
            state.Auth = action.payload.Auth;
        }
    }
})

export const {setAuth} = AuthSlice.actions

export default AuthSlice.reducer;