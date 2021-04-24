import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect, Route, Switch } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import index from './components/ProductDetails/index'
class App extends Component {

  render() {
    return (
      <Router>
              <div className="container">
        <div className="row">
          {this.props.products.map((product) => (
            <div className="col-xs-12 col-md-4 col-lg-3">
              <div className="card" style={{ width: 18 + 'rem' }}>
                <img src={`/images/${product.image}`} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{product.productName}</h5>
                  <p className="card-text">{product.description}</p>
                  <Link to={`/product/${product.id}`} className="btn btn-primary">Details</Link>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
      <Route path="/product/:id" exact Component={index}>
        <Redirect to="/product/:id" />
      </Route>
      <Route path="/" exact Component={App}/>
      </Router>

    )
  }
}
function mapStateToProps(state) {
  console.log(state)
  return {
    products: state
  }
}
export default connect(mapStateToProps)(App);