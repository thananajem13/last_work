import React from 'react'
import { ADD_TO_CART, GET_PRODUCTS_LIST } from '../types';

export const getProductsList = () => {
    const action = {
        type: GET_PRODUCTS_LIST
    }
    console.log("GET PRODUCTS LIST", action)
    return action
}
export const addToCart = (product_id) => {
    const action = {
        type: ADD_TO_CART,
        product_id:product_id
    }
    console.log("ADD TO CART", action)
    return action
}

