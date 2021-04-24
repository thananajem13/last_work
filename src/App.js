import React, { Component } from 'react';
import { connect } from 'react-redux'
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
              <div class="container">
        <div class="row">
          {this.props.products.map((product) => (
            <div class="col-xs-12 col-md-4 col-lg-3">
              <div class="card" style={{ width: 18 + 'rem' }}>
                <img src={`/images/${product.image}`} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">{product.productName}</h5>
                  <p class="card-text">{product.description}</p>
                  <Link to={`product/${product.id}`} class="btn btn-primary">Details</Link>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
      <Route path="product/:id" component={index}/>
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