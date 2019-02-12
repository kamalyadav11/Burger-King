import React from "react";
import Burger from "../../Burger/Burger";

const CheckoutSummary = props => {
  return (
    <div>
      <h1>We hope it tastes well!</h1>
      <div style={{ width: "300px", height: "300px", margin: "auto" }}>
        <Burger />
      </div>
    </div>
  );
};

export default CheckoutSummary;
