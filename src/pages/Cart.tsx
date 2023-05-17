import React from 'react';
import CartItem from "../components/CartItem";
import {IProduct} from "../types";
import classes from "../styles/Pages.module.css"
import {useAppSelector} from "../hooks/useTyped";
import CartList from "../components/CartList";

const Cart = () => {
    return (
        <div className={classes.body}>
            <CartList/>
        </div>
    );
};

export default Cart;