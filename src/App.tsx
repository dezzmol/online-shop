import React, {useEffect} from 'react';
import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/AppRouter";
import "./App.css"
import {useAppDispatch} from "./hooks/useTyped";
import {isLog} from "./store/AuthContext/ActionCreators";

const App = () => {
    const dispatch = useAppDispatch()

    useEffect( () => {
        dispatch(isLog())
    }, [])
    return (
        <BrowserRouter>
            <Navbar/>
            <AppRouter/>
        </BrowserRouter>
    );
};

export default App;