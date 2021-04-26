import { ADD_TO_CART, GET_PRODUCTS_LIST } from "../types";
import { stockData } from './../product'
const cartItems = [{
    product:{},
    qty:0,
}]
const cart = function (state = [], action) {
    switch (action.type) { 
        case ADD_TO_CART:
            console.log("from reducer: ", state)
            const product = stockData.find(product =>
                product.id === action.product_id);
                cartItems = [...state,{
                    product:product,
                    qty:action.qty,
                }]
                state = cartItems
            return state;
        default:
            return state;
    }
}


export default cart

