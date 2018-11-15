import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";

export default class BurgerBuilder extends Component {
  state = {
    ingredients: {
      meat: 1,
      cheese: 2,
      bacon: 2,
      salad: 1
    }
  };

  render() {
    return (
      <>
        <div>
          <Burger ingredients={this.state.ingredients} />
        </div>
        <div>Build Controls</div>
      </>
    );
  }
}
