import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { get_total_price } from '../../actions'; 
const Navbar = ({ get_total_price }) => {
 
  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to="/" className="brand-logo">Shopping</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-2">
            <li className="nav-item"><Link className="nav-link" to="/">Shop</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/cart">My cart</Link></li>
            {/* <li className="nav-item"><Link className="nav-link" to="/cart"><i className="bg-danger">shopping_cart <span className="badge badge-dark">{get_total_price}</span></i></Link></li> */}
            <li className="nav-item"><Link className="nav-link" to="/cart"><i className="bg-danger">shopping_cart <span className="badge badge-dark">{localStorage.getItem("cart")!==null?localStorage.getItem("total_price"):0}</span></i></Link></li>
          </ul>
        </div>

      </div>
    </nav>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    get_total_price: () => dispatch(get_total_price()), 
  }
};
export default connect(null, mapDispatchToProps)(Navbar);