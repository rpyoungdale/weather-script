import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";

const NavBar = props => {
  return (
    <Menu size={"huge"}>
      <Menu.Item name="login">
        <NavLink to="/login">Login</NavLink>
      </Menu.Item>
      {props.loggedIn ? (
        <Menu.Item name="dashboard">
          <NavLink to="/dashboard">Dashboard</NavLink>
        </Menu.Item>
      ) : null}
    </Menu>
  );
};

export default NavBar;
