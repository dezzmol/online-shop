import React, {FC, useState} from 'react';
import {Routes, Route} from "react-router-dom";
import {privatePages, publicPages} from "../router";

const AppRouter: FC = () => {
    const [isAuth, setIsAuth] = useState<boolean>(true);

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