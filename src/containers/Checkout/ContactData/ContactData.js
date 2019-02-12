import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.css";
import axios from "axios";

export default class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: ""
    },
    loading: false
  };

  orderHandler = e => {
    e.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      totalPrice: this.props.price,
      customer: {
        name: "Kamal Yadav",
        address: {
          street: "Test Street",
          country: "India"
        },
        email: "test@test.com"
      },
      deleiveryMethod: "fastest"
    };

    axios
      .post("/orders.json", order)
      .then(() => this.setState({ loading: false, purchasing: false }))
      .catch(() => this.setState({ loading: false, purchasing: false }));
  };

  render() {
    return (
      <div className={classes.ContactData}>
        <h4>Enter your contact Data</h4>
        <form action="">
          <input
            className={classes.Input}
            type="text"
            name="name"
            placeholder="Your Name"
          />
          <input
            className={classes.Input}
            type="email"
            name="email"
            placeholder="Your email"
          />
          <input
            className={classes.Input}
            type="text"
            name="street"
            placeholder="Street"
          />
          <input
            className={classes.Input}
            type="text"
            name="postal"
            placeholder="Postal Code"
          />
          <Button btnType="Success" clicked={this.orderHandler}>
            ORDER
          </Button>
        </form>
      </div>
    );
  }
}
