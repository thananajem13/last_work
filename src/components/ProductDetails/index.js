import React, { Component } from 'react'
import { connect } from 'react-redux'
import './index.css'
import './../../../node_modules/font-awesome/css/font-awesome.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";

const Index = ({products}) => {
    // id = null;
    // product = null
    // componentDidMount() {
    //    id = this.props.match.params.id; 
    // }  
    let { id } = useParams();
    console.log(id); 
    console.log(products); 
    const product_details_by_id = products.find(product =>
        product.id === id);
    console.log(product_details_by_id);
    return (

        <div className="container">
            {
            }
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
                                        <li><span className="fa fa-dollar-sign">&nbsp;{`Price: ${product_details_by_id.price} `} </span></li>
                                        <li><span className="fa fa-audio-description">&nbsp;{`Description: ${product_details_by_id.description} `} </span></li>
                                    </ul>
                                </div>
                                <div className="col-xs-3 col-md-3 text-xs-center" id="hits">
                                    <span className="fa fa-sort-amount-up">&nbsp;</span>
                                    
                                    <input type="number"  />
                                </div>
                                <div className="col-xs-3 col-md-3 text-xs-center" id="fan">
                                    <button className="btn btn-danger"><span className="fa fa-cart-plus">&nbsp;</span>Add to cart</button>
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
        products: state
    }
}
export default connect(mapStateToProps)(Index);
