import React from 'react';
import classes from '../styles/Pages.module.css'
import LoginAuth from "../components/LoginAuth";
import {useAppSelector} from "../hooks/useTyped";

const Login = () => {
    const {Auth} = useAppSelector(state => state.auth)

    return (
        <div className={classes.body}>
            <div className={classes.login}>

                <LoginAuth/>
            </div>
        </div>
    );
};

export default Login;