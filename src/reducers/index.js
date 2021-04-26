import { GET_PRODUCTS_LIST } from "../types";
import { stockData } from './../product'
const initState = stockData
const getProductListReducer = function (state = initState, action) {
    switch (action.type) {
        case GET_PRODUCTS_LIST:
            console.log("from reducer: ", state)
            return state;
        case ADD_TO_CART:
            console.log("from reducer: ", state)
            product = stockData.find(product =>
                product.id === action.product_id);
            state = [...state,product]
            return state;
        default:
            return state;
    }
}


export default getProductListReducer

