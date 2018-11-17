import React from "react";
import Button from "../../UI/Button/Button";

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
      <p>
        <strong>Total Price of Order: {props.price.toFixed(2)}</strong>
      </p>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" clicked={props.purchaseCanceled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>
        CONTINUE
      </Button>
    </React.Fragment>
  );
};

export default OrderSummary;
