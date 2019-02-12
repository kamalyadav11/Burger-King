import React, { Component } from "react";
import { Route } from "react-router-dom";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";

export default class Checkout extends Component {
  state = {
    ingredients: {
      salad: 1,
      meat: 1,
      cheese: 1,
      bacon: 1
    }
  };

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    for (let param of query.entries()) {
      //['salad', '1']
      ingredients[param[0]] = +param[1];
    }

    this.setState({ ingredients });
  }

  onCheckoutCancelled = () => {
    this.props.history.goBack();
  };

  onCheckoutContinued = () => {
    this.props.history.replace("/checkout/contact-data");
  };

  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          onCheckoutCancelled={this.onCheckoutCancelled}
          onCheckoutContinued={this.onCheckoutContinued}
        />
        <Route
          path={this.props.match.path + "/contact-data"}
          render={() => <ContactData ingredients={this.state.ingredients} />} //using render and not component so that we can pass props to the component
        />
      </div>
    );
  }
}
