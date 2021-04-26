import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Index.css'
import { connect } from "react-redux";
import { GET_TOTAL_PRICE, REMOVE_FROM_CART } from '../../types';

// import cart from './reducers/cart'
const Index=()=> {
    return (
        <div>
            <Navbar />
            <div className="container bootstrap snippets bootdey">
                <div className="col-md-9 col-sm-8 content">
                    <div className="row">
                        <div className="col-md-12">
                            <ol className="breadcrumb">
                                <li><a href="#">Home</a></li>
                                <li className="active">Cart</li>
                            </ol>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="panel panel-info panel-shadow">
                                <div className="panel-heading">
                                    <h3>
                                        <img className="img-circle img-thumbnail" src="https://bootdey.com/img/Content/user_3.jpg" />
                            Matew darfkmoun
                        </h3>
                                </div>
                                <div className="panel-body">
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>Product</th>
                                                    <th>Description</th>
                                                    <th>Qty</th>
                                                    <th>Price</th>
                                                    <th>Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {this.props.products.map((cartItem) => (
                                                 <tr>
                                                    <td><img src="https://via.placeholder.com/400x200/FFB6C1/000000" className="img-cart" /></td>
                                                    <td><strong>{cartItem.product.image}</strong><p>Size : 26</p></td>
                                                    <td>
                                                        <form className="form-inline">
                                                            <input className="form-control" type="number" defaultValue="1" value={cartItem.qty} />
                                                            <button rel="tooltip" className="btn btn-default"><i className="fa fa-pencil"></i></button>
                                                            <button className="btn btn-primary" onClick={this.props.RemoveFromCart(cartItem.product.id)}><i className="fa fa-trash-o"></i></button>
                                                        </form>
                                                    </td>
                                                    <td>{`${cartItem.product.price}$`}</td>
                                                    <td>$54.00</td>
                                                </tr>

                                         
                                            ))},
                                                      <tr>
                                                    <td colSpan="6">&nbsp;</td>
                                                </tr>
                                                <tr>
                                                    <td colSpan="4" className="text-right">Total Product</td>
                                                    <td>{this.props.get_total_price()}</td>
                                                </tr>
                                                <tr>
                                                    <td colSpan="4" className="text-right">Total Shipping</td>
                                                    <td>$2.00</td>
                                                </tr>
                                                <tr>
                                                    <td colSpan="4" className="text-right"><strong>Total</strong></td>
                                                    <td>$88.00</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <a href="#" className="btn btn-success"><span className="glyphicon glyphicon-arrow-left"></span>&nbsp;Continue Shopping</a>
                            <a href="#" className="btn btn-primary pull-right">Next<span className="glyphicon glyphicon-chevron-right"></span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
function mapStateToProps(state) {
    console.log(state.c);
    return {
      products: state.c,
    };
  }
  const mapDispatchToProps = dispatch => {
    return {
      get_total_price: () => dispatch({ type: GET_TOTAL_PRICE }),
      RemoveFromCart: (params) => dispatch({type: REMOVE_FROM_CART })
    }
  };
export default connect(mapStateToProps,mapDispatchToProps)(Index); 
