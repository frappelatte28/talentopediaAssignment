import React, { useState } from "react";
import { Button } from "./button";
import { Link } from "react-router-dom";
import "./navbar.css";
import DropdownItems from "./dropdown";
import Dropdown from "react-bootstrap/Dropdown";
export default function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        Logo
      </Link>
      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"} />
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <Link to="/" className="nav-links">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Dropdown className="nav-links">
            <Dropdown.Toggle id="dropdown-basic">Destinations</Dropdown.Toggle>
            <Dropdown.Menu>
              <DropdownItems />
            </Dropdown.Menu>
          </Dropdown>
        </li>
        <li className="nav-item">
          <Link to="/contactUs" className="nav-links" onClick={closeMobileMenu}>
            Contact us
          </Link>
        </li>
        <li id="signUpBtn" className="nav-item">
          <Button />
        </li>
      </ul>
    </nav>
  );
}
