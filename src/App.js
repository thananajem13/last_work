import React, { Component } from "react" 
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.bundle.min"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import {default as PD}  from "./components/ProductDetails/index"
import Home from "./components/Home" 
import {default as CI}  from "./components/CartItem/Index" 
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
          </Route>
        </Switch>
      </Router>
    );
  }
}
