import React from "react";
import { Nav, NavLink } from "reactstrap";
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
    {/* <img className="logo" src={require("./logo.png")} alt="pot" /> */}
      <h1 className="nav-title">Glaze Gallery</h1>
      <Nav className="nav-links">
            {currentPotter ? 
        <NavLink className="nav-item" href={`/potters/${currentPotter}`} active>
          <h3>My Pots</h3>
        </NavLink> : null }
        {currentPotter ? 
        <NavLink className="nav-item" href="/pots" active>
         <h3>Gallery</h3> 
        </NavLink> : null }
        {currentPotter ? 
        <NavLink className="nav-item" onClick={handleLogout} href="/" active>
         <h3>Logout</h3> 
        </NavLink> : null }
        
      </Nav>
      <hr className="lineBreak"></hr>
    </div>
  );
};


export default NavBar;
