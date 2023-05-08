import React, {FC, useEffect, useState} from 'react';
import {useAppSelector} from "../hooks/useTyped";
import CartItem from "./CartItem";
import {IProduct} from "../types";

const CartList: FC = () => {
    const {cartItems} = useAppSelector(state => state.cart)
    const {products} = useAppSelector(state => state.product)
    const [cost, setCost] = useState<number>(0)

    useEffect(() => {
        setCost(0)
        let tempCost: number = 0;
        let product;
        cartItems.map(item => {
                product = products.find(i => i.id === item.productId)
                if (product) {
                   tempCost += product.price;
                }
            }
        )
        console.log(tempCost)
        setCost(tempCost)
    }, [cartItems])

    return (
        <div>
            {cartItems.length > 0 ?
                <div>{cartItems.map(cartItem =>
                    <CartItem productId={cartItem.productId} count={cartItem.count}/>
                )}
                    <h2>
                        Purchase amount is: {cost} $
                    </h2>
                </div>
                : <div>No items in the Cart</div>
            }
        </div>
    );
};

export default CartList;