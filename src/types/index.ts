export interface ICartItem {
    productId: number;
    count: number;
}

export interface IProduct {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: IRating;
}

interface IRating {
    rate: number;
    count: number
}

// enum Category {
//     "men's clothing"
// }