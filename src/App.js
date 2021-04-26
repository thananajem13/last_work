import React, { Component } from "react"; ;
// import "bootstrap/dist/css/bootstrap.min.css";
// import $ from "jquery";
// import Popper from "popper.js";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {default as PD}  from "./components/ProductDetails/index";
import Home from "./components/Home"; 
import {default as CI}  from "./components/CartItem/Index"; 
export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/product/:id">
            <PD />
          </Route>
          <Route path="/cart">
            <CI />
          </Route>
          <Route path="/" exact>
            <Home />
            {/* <h1>home</h1> */}
          </Route>
        </Switch>
      </Router>
    );
  }
}
