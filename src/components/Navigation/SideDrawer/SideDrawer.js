import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

import classes from "./SideDrawer.css";

const sideDrawer = () => {
  return (
    <div className={classes.SideDrawer}>
      <Logo height="10%" marginBottom="32px" />
      <nav>
        <NavigationItems />
      </nav>
    </div>
  );
};

export default sideDrawer;
