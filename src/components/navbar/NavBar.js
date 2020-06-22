import React, { useState } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import "./NavBar.css";

const NavBar = (props) => {
  const handleLogout = () => {
		props.clearEmployee();
		props.history.push("/");
  };
  const currentPotter = localStorage.getItem("currentPotter")
  
  return (
    <div>
      <h1 className="nav-title">Glaze Gallery</h1>
      <Nav>
        <NavLink className="nav-item" href={`/potters/${currentPotter}`}>
          My Pots
        </NavLink>{" "}
        <NavLink className="nav-item" href="/pots">
          Gallery
        </NavLink>{" "}
        <NavLink className="nav-item" onClick={handleLogout} href="/">
          Logout
        </NavLink>
        
      </Nav>
    </div>
  );
};


export default NavBar;
