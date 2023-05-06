import React from 'react';
import CartItem from "../components/CartItem";
import {IProduct} from "../types";
import classes from "../styles/Pages.module.css"
import {useAppSelector} from "../hooks/useTyped";

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
            {cartItems.length > 0 ?
                <div>{cartItems.map(cartItem =>
                    <CartItem productId={cartItem.productId} count={cartItem.count}/>
                )}</div>
                : <div>No items in the Cart</div>
            }



        </div>
    );
};

export default Cart;