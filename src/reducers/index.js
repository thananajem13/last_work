import { GET_PRODUCTS_LIST } from "../types";

import { stockData } from './product'
import React, { Component } from 'react' 

export class CartReducer extends Component {
    state = {
        products: [],
        total_price: 0
    }

    componentDidMount(){
        this.setState(products,stockData)
    }
    getProductList = function (state = [], action) {
        switch (action.type) {
          case GET_PRODUCTS_LIST:
              console.log("from reducer: ",this.state.products)
            return this.state.products ;
          default:
            return state;
        }
      }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default index

