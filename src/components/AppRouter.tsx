import React, {FC, useEffect, useState} from 'react';
import {Routes, Route} from "react-router-dom";
import {privatePages, publicPages} from "../router";
import {useAppDispatch, useAppSelector} from "../hooks/useTyped";

const AppRouter: FC = () => {
    const isAuth = useAppSelector(state => state.auth.Auth)
    const dispatch = useAppDispatch()


    return (
        <Routes>
            {isAuth
                ? privatePages.map(route =>
                    <Route
                        path={route.path}
                        element={<route.component />}
                        key={route.path}
                    />
                ) :
                publicPages.map(route =>
                    <Route
                        path={route.path}
                        element={<route.component />}
                        key={route.path}
                    />
                )
            }
        </Routes>
    );
};

export default AppRouter;