import React, { useState } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import "./NavBar.css";

const NavBar = (props) => {
  const handleLogout = () => {
		localStorage.removeItem("currentPotter");
    props.history.push("/");
    props.setIsAuthenticated(false)
  };
  const currentPotter = localStorage.getItem("currentPotter")
  
  return (
    <div>
      <h1 className="nav-title">Glaze Gallery</h1>
      <Nav>
            {currentPotter ? 
        <NavLink className="nav-item" href={`/potters/${currentPotter}`}>
          My Pots
        </NavLink> : null }
        {currentPotter ? 
        <NavLink className="nav-item" href="/pots">
          Gallery
        </NavLink> : null }
        {currentPotter ? 
        <NavLink className="nav-item" onClick={handleLogout} href="/">
          Logout
        </NavLink> : null }
        
      </Nav>
    </div>
  );
};


export default NavBar;
