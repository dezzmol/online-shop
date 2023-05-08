import {ICartItem} from "../types";

export const toCartItem = (productId: number, count: number): ICartItem => {
    const cartItem: ICartItem = {productId, count}
    return cartItem
}

export const checkCart = (item: ICartItem, cart: ICartItem[]) => {
    return cart.includes(item)
}