import { ADD_TO_CART, CHEK_IF_ITEM_EXIST_IN_CART, GET_PRODUCTS_LIST, GET_TOTAL_PRICE, REMOVE_FROM_CART } from "../types";
import { stockData } from './../product'
const initState = {
    products: stockData,
    cart: [],
    total_price: 0,
    itemIsExistInCart: false
}

const getProductListReducer = function (state = initState, action) {
    //console.log(state.products[0].id);
    localStorage.clear()
    switch (action.type) {

        case GET_PRODUCTS_LIST:
            //console.log("from reducer: ", state)
            return state;

        case ADD_TO_CART:
        if(localStorage.getItem("cart") !== null){
            state.cart = localStorage.getItem("cart")
        }
            const productItem = state.products.find(product =>
                product.id === action.product_id);
               
            const cartItems = [...state.cart,{
                product: productItem,
                qty: action.qty
            }]
            localStorage.removeItem("cart")
            console.log("cartItems: ",cartItems)
            
            console.log("JSON.stringify(cartItems):  ",JSON.stringify(cartItems))
            console.log("test JSON.parse:  ",((localStorage.getItem("cart"))))
            state.cart = cartItems
            console.log("add to cart: " , state)
            /* */
            state.cart.map(item => (
                state.total_price = item.product.price * item.qty
            ));
            localStorage.setItem("total_price",state.total_price);
            localStorage.setItem("cart",JSON.stringify(cartItems))
            /* */ 
            return state;

        case REMOVE_FROM_CART:
            // //console.log("from reducer: ", state)
            const ProductAfterRemove = state.products.filter(product =>
                product.id !== action.product_id);
                localStorage.setItem("cart",ProductAfterRemove)
            state.cart = ProductAfterRemove
            /* */
            state.cart.map(item => (
                state.total_price = item.product.price * item.qty
            ));
            localStorage.setItem("total_price",state.total_price)
            /* */
            return state;

        case GET_TOTAL_PRICE:
            // //console.log("from reducer: ", state)
            state.cart = localStorage.getItem("cart")
            console.log("thana thana thana thana thana thana thana thana thana thana :",state.cart)
            state.cart.map(item => (
                state.total_price = item.product.price * item.qty
            ));
            localStorage.setItem("total_price",state.total_price)
            return state;

        case CHEK_IF_ITEM_EXIST_IN_CART:
            // //console.log("from reducer: ", state)
            // const cart_product = state.cart
            const cart_product = [];
            if(localStorage.getItem("cart") !== null){ 
                console.log((localStorage))
                cart_product = localStorage.getItem("cart")
            }
            const check_if_item_exist_in_cart = false
            console.log("thana ",action.product_id)
            console.log("cart ",cart_product)
            cart_product.map((product) => (
                console.log("action.product_id:  ",action.product_id),
                console.log("check_if_item_exist_in_cart: ",product.id.indexOf(action.product_id) !== -1)
                // check_if_item_exist_in_cart = product.id.indexOf(action.product_id) !== -1
            ))
            // state.itemIsExistInCart = check_if_item_exist_in_cart
            return state;
            
        default:
            return state;
    }
}


export default getProductListReducer

