import React from "react";

import classes from "./Backdrop.css";

const backdrop = props => {
  return props.show ? <div className={classes.backdrop} /> : null;
};

export default backdrop;
