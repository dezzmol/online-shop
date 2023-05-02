import axios from "axios"
import {IProduct} from "../types";

export default class ProductService {
    static async getAllItems() {
        try {

        } catch (e) {

        }
        const response = await axios.get<IProduct[]>("https://fakestoreapi.com/products")

        return response.data;
    }


}