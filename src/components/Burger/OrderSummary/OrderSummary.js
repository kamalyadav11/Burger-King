import React from "react";

const OrderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey, i) => {
    return (
      <li key={igKey + i}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
        {props.ingredients[igKey]}
      </li>
    );
  });

  return (
    <React.Fragment>
      <h3>Your Order</h3>
      <p>Your delicious Burger Contains following ingredients</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to Checkout</p>
      <button>CANCEL</button>
      <button>CONTINUE</button>
    </React.Fragment>
  );
};

export default OrderSummary;
