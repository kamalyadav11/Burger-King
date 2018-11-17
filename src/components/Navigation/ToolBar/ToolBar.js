import React from "react";

import classes from "./ToolBar.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

const toolbar = props => {
  return (
    <header className={classes.Toolbar}>
      <div>MENU</div>
      <Logo height={"80%"} />
      <NavigationItems />
    </header>
  );
};

export default toolbar;
