import React from "react";
import "./Nav.css";
import logo from "../../../../public/images/logo.svg";

function Nav() {
  return (
    <>
      <nav className="navBar">
        <div className="navLogo">
          <img src={logo} alt="Logo" className="navLogo" />
        </div>
        <div className="navLinks">
          <ul>
            <li>
              <a href="/">Features</a>
            </li>
            <li>
              <a href="/">Team</a>
            </li>
            <li>
              <a href="/">Sign In</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav;
