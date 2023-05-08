import React from 'react';
import CartItem from "../components/CartItem";
import {IProduct} from "../types";
import classes from "../styles/Pages.module.css"
import {useAppSelector} from "../hooks/useTyped";
import CartList from "../components/CartList";

const Cart = () => {
    const test: IProduct = {
        id: 0,
        title: "asd",
        description: "dsa",
        rating: {
            rate: 3,
            count: 5
        },
        category: "hfg",
        image: "dsfdga",
        price: 3
    }

    const {cartItems} = useAppSelector(state => state.cart)

    return (
        <div className={classes.body}>
            <CartList/>
        </div>
    );
};

export default Cart;