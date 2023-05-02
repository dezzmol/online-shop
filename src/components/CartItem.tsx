import React, {FC} from 'react';
import {IProduct, ICartItem} from "../types";
import {useAppSelector} from "../hooks/useTyped";
import cart from "../pages/Cart";



const CartItem: FC<ICartItem> = (cartItem) => {
    const {products} = useAppSelector(state => state.product)
    const product= products.find(i => i.id === cartItem.productId)


    return (
        <div>
            {product!.title}
            <div>
                Count: {cartItem.count}
            </div>
        </div>
    );
};

export default CartItem;