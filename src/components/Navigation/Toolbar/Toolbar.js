import React from "react";
import classes from "./Toolbar.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawToggle from "../SideDrawer/DrawerToggle/DrawToggle";

const toolbar = props => {
  return (
    <header className={classes.Toolbar}>
      <Logo height={"90%"} />
      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
      <DrawToggle clicked={props.drawerToggleClicked} />
    </header>
  );
};

export default toolbar;
