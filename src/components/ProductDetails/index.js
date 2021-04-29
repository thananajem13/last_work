import React, { useState } from 'react'
import { connect } from 'react-redux'
import './index.css'
import './../../../node_modules/font-awesome/css/font-awesome.min.css';
import { useParams } from "react-router-dom";
import Navbar from '../Navbar/Navbar';
import { addToCart, check_if_item_exist_in_cart, removeFromCart } from '../../actions';

const Index = ({ products }) => {
    let { id } = useParams();
    const product_details_by_id = products.find(product =>
        product.id === id);
    const [qty, setQty] = useState(0);
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <div className="row" id="gradient">
                            <div className="col-md-4">
                                <img src={`/images/${product_details_by_id.image}`} className="img-fluid" alt="product image" />
                            </div>
                            <div className="col-md-8" id="overview">
                                <div className="row">
                                    <div className="col-xs-6 col-md-6">
                                        <ul className="pb-product-details-ul">
                                            <li><span className="fa fa-product-hunt">&nbsp;{`ProductName: ${product_details_by_id.ProductName} `}</span></li>
                                            <li><span className="fa fa-microchip">&nbsp;{`CPU: ${product_details_by_id.cpu} `}</span></li>
                                            <li><span className="fa fa-laptop">&nbsp;{`Screen: ${product_details_by_id.screen} `}</span></li>
                                            <li><span className="fa fa-memory">&nbsp;{`RAM: ${product_details_by_id.ram} `}</span></li>
                                            <li><span className="fa fa-hdd">&nbsp;{`Storage: ${product_details_by_id.storage} `} </span></li>
                                            <li><span className="fa fa-dollar-sign">&nbsp;{`Price: ${product_details_by_id.price}$ `} </span></li>
                                            <li><span className="fa fa-audio-description">&nbsp;{`Description: ${product_details_by_id.description} `} </span></li>
                                        </ul>
                                    </div>
                                    <div className="col-xs-6 col-md-6">
                                        <div className="row">
                                            <div className="col-xs-10 col-md-10 text-xs-center form-outline" id="hits">
                                                <span className="fa fa-sort-amount-up">&nbsp;</span>
                                                <label className="form-label" htmlFor="qty">Quantity</label>
                                                <input type="number" id="qty" min="1" className="form-control" onChange={(e) => { setQty(e.target.value) }} />

                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xs-10 col-md-10 text-xs-center " id="fan">
                                                {this.props.CheckIfItemExistInCart(product_details_by_id.id)}
                                                {!(this.props.itemIsExistInCart) ?
                                                    <button className="btn btn-danger form-control d-block" onClick={this.props.addToCart(product_details_by_id.id, qty)}><span className="fa fa-cart-plus">&nbsp;</span>Add to cart</button>
                                                    :
                                                    <button className="btn btn-danger form-control d-block" onClick={this.props.removeFromCart(product_details_by_id.id)}><span className="fa fa-cart-plus">&nbsp;</span>Remove from cart</button>
                                                }

                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

function mapStateToProps(state) {
    console.log(state)
    return {
        products: state.products,
        cart: state.cart,
        itemIsExistInCart: state.itemIsExistInCart,
        total_price: state.total_price
    }
}


const mapDispatchToProps = dispatch => {
    return {
        AddToCart: (product_id, qty) => dispatch(addToCart(product_id, qty)),
        RemoveFromCart: (product_id) => dispatch(removeFromCart(product_id)),
        CheckIfItemExistInCart: (product_id) => dispatch(check_if_item_exist_in_cart(product_id)),
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Index);


