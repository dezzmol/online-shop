import React, {FC} from 'react';
import {useAppSelector} from "../hooks/useTyped";
import CartItem from "./CartItem";

const CartList:FC = () => {
    const {cartItems} = useAppSelector(state => state.cart)



    return (
        <div>
            {cartItems.length > 0 ?
                <div>{cartItems.map(cartItem =>
                    <CartItem productId={cartItem.productId} count={cartItem.count}/>
                )}
                <div>
                    Purchase amount is:
                </div>
                </div>
                : <div>No items in the Cart</div>
            }
        </div>
    );
};

export default CartList;