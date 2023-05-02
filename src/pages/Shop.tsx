import React from 'react';
import classes from "../styles/Pages.module.css"
import {IProduct} from "../types";
import ProductList from "../components/ProductList";

const Shop = () => {
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

    return (
        <div className={classes.body}>
            <h1>Shop</h1>
            <ProductList/>
        </div>
    );
};

export default Shop;