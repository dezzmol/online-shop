import About from "../pages/About";
import {FunctionComponent} from "react";
import Login from "../pages/Login";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import NotFound from "../pages/NotFound";

interface IPages {
    path: string;
    component: FunctionComponent;
}


export const privatePages: IPages[] = [
    {path: '/about', component: About},
    {path: "/shop", component: Shop},
    {path: '/cart', component: Cart},
    {path: "/*", component: NotFound},
]

export const publicPages: IPages[] = [
    {path: "/login", component: Login},
    {path: "/*", component: NotFound},
    {path: '/about', component: About},
    {path: "/shop", component: Shop},
]
