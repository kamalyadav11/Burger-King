import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";
import Layout from "./containers/Layout/Layout";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Route path="/" component={BurgerBuilder} />
          <Route path="/checkout" component={Checkout} />
        </Layout>
      </div>
    );
  }
}

export default App;
