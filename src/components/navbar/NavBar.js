import React, { useState } from 'react';
import {
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import "./NavBar.css"

const NavBar = (props) => {
  return (
    <div>
  
      <h1 className="nav-title">Glaze Gallery</h1>
      <Nav>
        <NavLink className="nav-item" to="/potters">My Pots</NavLink> <NavLink className="nav-item" to="/">Gallery</NavLink> <NavLink className="nav-item" to="/">Logout</NavLink> 

        {/* <NavLink className="nav-item" disabled href="#">Disabled Link</NavLink> */}
      </Nav>
    </div>
  );
}

export default NavBar;