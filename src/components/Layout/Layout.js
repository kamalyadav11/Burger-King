import React from "react";

import classes from "./Layout.css";
import Toolbar from "../Navigation/ToolBar/ToolBar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

const Layout = props => {
  return (
    <React.Fragment>
      <SideDrawer />
      <Toolbar />
      <main className={classes.Content}>{props.children}</main>
    </React.Fragment>
  );
};

export default Layout;
