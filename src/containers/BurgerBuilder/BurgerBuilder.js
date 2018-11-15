import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";

export default class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 2,
      cheese: 1,
      meat: 1,
      bacon: 2
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
