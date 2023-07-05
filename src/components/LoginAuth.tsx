import React, {useState} from 'react';
import MyInput from "./UI/Input/MyInput";
import Button from "./UI/Button/Button";
import {useAppDispatch} from "../hooks/useTyped";
import {userLogin, userReg} from "../store/AuthContext/ActionCreators";
import LoginInput from "./UI/loginInput/LoginInput";

const LoginAuth = () => {
    const [isReg, setIsReg] = useState<boolean>(true)
    const [Username, setUsername] = useState<string>('')
    const [Password, setPassword] = useState<string>('')
    const dispatch = useAppDispatch()

    const SignIn = () => {
        if (isReg) {
            dispatch(userLogin(Username, Password))
        } else {
            dispatch(userReg('mor_2314','83r5^_'))
        }

    }

    const switchRegFlag = () => {
        setIsReg(!isReg);
    }

    return (
        <div>
            <h2 style={{background: 'inherit'}}>{isReg ? 'Login' : 'Registration'}</h2>
            <div style={{background: "inherit"}}>
                Username:
                <div style={{background: "inherit"}}>
                    <LoginInput placeholder={'Username'} value={Username} readOnly={false} onChange={e => setUsername(e.target.value)} type={"text"}/>
                </div>
            </div>
            <div style={{background: "inherit"}}>
                Password:
                <div style={{background: "inherit"}}>
                    <LoginInput placeholder={'Password'} value={Password} readOnly={false} onChange={e => setPassword(e.target.value)} type={"password"}/>
                </div>
            </div>
            <div style={{background: "inherit", marginTop: '5px'}}>
                <Button onClick={SignIn}>{isReg ? "Login" : "Sign up"}</Button>
            </div>
            <div style={{background: "inherit"}}>
                {isReg ? "Don't have an account yet?" : "Already have an account?"}
            </div>
            <div style={{background: "inherit"}}>
                <Button onClick={switchRegFlag}>{isReg ? "Sign up" : "Sign In"}</Button>
            </div>
        </div>
    );
};

export default LoginAuth;