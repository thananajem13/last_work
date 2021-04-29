import React from 'react'
import { ADD_TO_CART, CHEK_IF_ITEM_EXIST_IN_CART, GET_PRODUCTS_LIST, GET_TOTAL_PRICE, REMOVE_FROM_CART } from '../types';

export const getProductsList = () => {
    const action = {
        type: GET_PRODUCTS_LIST
    }
    console.log("GET PRODUCTS LIST", action)
    return action
}
export const addToCart = (product_id,qty) => {
    const action = {
        type: ADD_TO_CART,
        product_id:product_id,
        qty:qty
    }
    console.log("ADD TO CART", action)
    return action
}
export const removeFromCart = (product_id) => {
    const action = {
        type: REMOVE_FROM_CART,
        product_id:product_id 
    }
    console.log("REMOVE FROM CART", action)
    return action
}
export const check_if_item_exist_in_cart = (product_id) => {
    const action = {
        type: CHEK_IF_ITEM_EXIST_IN_CART ,
        product_id: product_id 
    }
    console.log("CHEK IF ITEM EXIST IN CART", action)
    return action
}
export const get_total_price = () => {
    const action = {
        type: GET_TOTAL_PRICE 
    }
    console.log("GET TOTAL PRICE", action)
    return action
}

