import React from 'react';
import { Link } from 'react-router-dom'
const Navbar = () => {
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
                        <li className="nav-item"><Link className="nav-link" to="/cart"><i className="bg-danger">shopping_cart <span className="badge badge-dark">4</span></i></Link></li>
                    </ul>
                </div>

            </div>
        </nav>
    )
}

export default Navbar;