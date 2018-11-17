import React from "react";

import classes from "./Layout.css";
import Toolbar from "../Navigation/ToolBar/ToolBar";

const Layout = props => {
  return (
    <React.Fragment>
      {/* <div>Toolbar, SideDrawer, Backdrop</div> */}
      <Toolbar />
      <main className={classes.Content}>{props.children}</main>
    </React.Fragment>
  );
};

export default Layout;
