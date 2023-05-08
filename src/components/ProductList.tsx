import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks/useTyped";
import {fetchProducts} from "../store/product/ActionCreators";
import Loader from "./UI/Loader/Loader";
import ProductItem from "./ProductItem";
import classes from "../styles/ProductList.module.css"

const ProductList: FC = () => {
    const dispatch = useAppDispatch()
    const {products, isLoading, error} = useAppSelector(state => state.product)


    useEffect(() => {
        dispatch(fetchProducts())
        }, [])

    return (
        <div>
            {isLoading &&
                <Loader/>
            }
            
            <div>Order by: </div>
            <div className={classes.body}>
                {
                    products.map(product =>
                        <ProductItem productItem={product}/>
                    )
                }
            </div>

        </div>
    );
};

export default ProductList;