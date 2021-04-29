import { ADD_TO_CART, CHEK_IF_ITEM_EXIST_IN_CART, GET_PRODUCTS_LIST, GET_TOTAL_PRICE, REMOVE_FROM_CART } from "../types";
import { stockData } from './../product'
const initState = {
    products: stockData,
    cart: [],
    total_price: 0,
    itemIsExistInCart: false
}

const getProductListReducer = function (state = initState, action) {
   console.log(state.products[0].id) ;
    switch (action.type) {
        case GET_PRODUCTS_LIST:
            console.log("from reducer: ", state)
            return state;
        /* */
        case ADD_TO_CART:
            console.log("from reducer: ", state)
            const productItem = state.products.find(product =>
                product.id === action.product_id);
            const cartItems = [...state.cart, {
                product: productItem,
                qty: action.qty
            }]
            this.setState({
                cart: cartItems
            })
            return state;
        case REMOVE_FROM_CART:
            console.log("from reducer: ", state)
            const ProductAfterRemove = state.products.filter(product =>
                product.id !== action.product_id);
            this.setState({
                cart: ProductAfterRemove
            })
            return state;
        case GET_TOTAL_PRICE:
            console.log("from reducer: ", state)
            state.cart.map(item => (
                this.setState({
                    total_price: item.product.price * item.qty
                })
            ));

            return state;
        case CHEK_IF_ITEM_EXIST_IN_CART:
            console.log("from reducer: ", state)
        const cart_product = state.cart
        const check_if_item_exist_in_cart = false
        cart_product.map((product)=>(
        check_if_item_exist_in_cart = product.id.indexOf(action.product_id) !== -1
        ))
            this.setState({
                state.itemIsExistInCart: check_if_item_exist_in_cart
            })
            return state;
        default:
            return state;
    }
}


export default getProductListReducer

