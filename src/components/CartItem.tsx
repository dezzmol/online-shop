import React, {FC, useState} from 'react';
import {IProduct, ICartItem} from "../types";
import {useAppDispatch, useAppSelector} from "../hooks/useTyped";
import cart from "../pages/Cart";
import classes from '../styles/CartItem.module.css'
import MyInput from "./UI/Input/MyInput";
import {changeCount, removeFromCart} from "../store/cart/cartSlice";
import {toCartItem} from "../helpers";
import Button from "./UI/Button/Button";


const CartItem: FC<ICartItem> = (cartItem) => {
    const {products} = useAppSelector(state => state.product)
    const product= products.find(i => i.id === cartItem.productId)
    const dispatch = useAppDispatch()

    const countChange = (cartitem: ICartItem) => {
        dispatch(changeCount(cartitem))
    }

    return (
        <div className={classes.body}>
            <div className={classes.image}>
                <img
                    src={product!.image}
                    height='200px'
                    width='200px'
                    style={{objectFit: "contain", background: "white"}}
                />
            </div>

            <div className={classes.description}>
                <h2>{product!.title}</h2>
                {product!.description}
                <h3 className={classes.price}>
                    Price: {product!.price} $
                </h3>
            </div>
            <div className={classes.count}>
                <h2>Count:</h2>
                <div className={classes.input}>
                    <MyInput
                        placeholder='number'
                        value={cartItem.count}
                        readOnly={false}
                        onChange={e => {countChange(toCartItem(cartItem.productId, Number(e.target.value)))}}
                        type={"number"}
                    />

                </div>
                <div className={classes.button}>
                    <Button onClick={() => dispatch(removeFromCart(cartItem))}>Delete</Button>
                </div>

            </div>
        </div>
    );
};

export default CartItem;