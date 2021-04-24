import React from 'react'
import { GET_PRODUCTS_LIST } from '../types';

export const getProductsList = () => {
    const action = {
        type: GET_PRODUCTS_LIST
    }
    console.log("GET PRODUCTS LIST", action)
    return action
}

