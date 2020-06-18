import React, { useState } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import "./NavBar.css";

const NavBar = (props) => {
  return (
    <div>
      <h1 className="nav-title">Glaze Gallery</h1>
      <Nav>
        <NavLink className="nav-item" href="/pots">
          My Pots
        </NavLink>{" "}
        <NavLink className="nav-item" href="pots">
          Gallery
        </NavLink>{" "}
        <NavLink className="nav-item" to="/">
          Logout
        </NavLink>
        
      </Nav>
    </div>
  );
};

export default NavBar;
