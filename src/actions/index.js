import React from 'react'
import { ADD_TO_CART, GET_PRODUCTS_LIST } from '../types';

export const getProductsList = () => {
    const action = {
        type: GET_PRODUCTS_LIST
    }
    console.log("GET PRODUCTS LIST", action)
    return action
}
export const addToCart = (product) => {
    const action = {
        type: ADD_TO_CART
    }
    console.log("ADD TO CART", action)
    return action
}

