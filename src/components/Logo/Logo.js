import React from "react";

import classes from "./Logo.css";
import burgerLogo from "../../assets/images/127 burger-logo.png";

const logo = props => {
  return (
    <div className={classes.Logo}>
      <img src={burgerLogo} alt="myburger" />
    </div>
  );
};

export default logo;
