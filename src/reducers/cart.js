import { ADD_TO_CART, CHEK_IF_ITEM_EXIST_IN_CART, GET_TOTAL_PRICE, REMOVE_FROM_CART } from "../types";
import { stockData } from './../product'
const cartItems = [{
    product:{},
    qty:0,
    
}]
const total_price = 0
const check_if_item_exist_in_cart = false
const cart = function (state = [], action) {
    switch (action.type) { 
        case ADD_TO_CART:
            console.log("from reducer: ", state)
            const productItem = stockData.find(product =>
                product.id === action.product_id);
                cartItems = [...state,{
                    product:productItem,
                    qty:action.qty 
                }]
                state = cartItems
            return state;
        case REMOVE_FROM_CART:
            console.log("from reducer: ", state)
            const ProductAfterRemove = stockData.filter(product =>
                product.id !== action.product_id);
                state = ProductAfterRemove
            return state;
        case GET_TOTAL_PRICE:
            console.log("from reducer: ", state)
            cartItems.map(item =>{
                total_price = total_price + (item.product.price * item.qty)
            });
                state = total_price
            return state;
        case CHEK_IF_ITEM_EXIST_IN_CART:
            console.log("from reducer: ", state)
            check_if_item_exist_in_cart = cartItems.product.id.indexOf(action.product_id) !== -1
                state = check_if_item_exist_in_cart
            return state;
        default:
            return state;
    }
}


export default cart

