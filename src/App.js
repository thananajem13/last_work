import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Index from "./components/ProductDetails/index";
import Home from "./components/Home";
export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/product/:id">
            <Index />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </Router>
    );
  }
}
