import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";

export default class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: ""
    }
  };

  render() {
    return (
      <div>
        <h4>Enter your contact Data</h4>
        <form action="">
          <input type="text" name="name" placeholder="Your Name" />
          <input type="email" name="email" placeholder="Your email" />
          <input type="text" name="street" placeholder="Street" />
          <input type="text" name="postal" placeholder="Postal Code" />
          <Button btnType="Success">ORDER</Button>
        </form>
      </div>
    );
  }
}
