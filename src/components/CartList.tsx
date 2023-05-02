import React, {FC} from 'react';
import {useAppSelector} from "../hooks/useTyped";

const CartList:FC = () => {
    const {cartItems} = useAppSelector(state => state.cart)

    return (
        <div>

        </div>
    );
};

export default CartList;