import React, {FC} from 'react';
import {IProduct} from "../types";
import classes from '../styles/ProductItem.module.css'
import Button from "./UI/Button/Button";
import {useAppDispatch} from "../hooks/useTyped";
import {addToCart} from "../store/cart/cartSlice";
import {toCartItem} from "../helpers";

interface IProductItem {
    productItem: IProduct,

}

const ProductItem: FC<IProductItem> = (productItem) => {
    const dispatch = useAppDispatch();

    return (
        <div className={classes.body}>
            <div className={classes.mainInfo}>
                <div className={classes.image}>
                    <img
                        src={productItem.productItem.image}
                        height='200px'
                        width='200px'
                        style={{objectFit: "contain", background: "white"}}
                    />
                </div>
                <h2 style={{background: "white"}}>{productItem.productItem.title}</h2>
                <div className={classes.category}>
                    Category: {productItem.productItem.category}
                </div>
                <div className={classes.description}>
                    {productItem.productItem.description}
                </div>
                <div className={classes.price}>
                    Price: {productItem.productItem.price} $
                </div>
            </div>

            <div className={classes.button}>
                <Button onClick={() => dispatch(addToCart(toCartItem(productItem.productItem.id, 1)))}>Add to card</Button>
            </div>
        </div>
    );
};

export default ProductItem;