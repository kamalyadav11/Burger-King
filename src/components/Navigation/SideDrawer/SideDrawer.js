import React from "react";

import Backdrop from "../../UI/BackDrop/Backdrop";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

import classes from "./SideDrawer.css";

const sideDrawer = props => {
  return (
    <React.Fragment>
      <Backdrop show />
      <div className={classes.SideDrawer}>
        <Logo height="10%" marginBottom="32px" />
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </React.Fragment>
  );
};

export default sideDrawer;
