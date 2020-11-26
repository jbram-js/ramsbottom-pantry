import React from "react";
import { Link } from "react-scroll";
import logo from "../images/rp_logo.svg";

const NavBar = () => {
  return (
    <div className="NavBar">
      <img src={logo} alt="Ramsbottom Pantry logo" className="logo"></img>
      <ul className="nav-list">
        <li className="nav-items">
          <Link
            activeClass="active"
            to="About"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            About us
          </Link>
        </li>
        <li className="nav-items">
          <Link
            activeClass="active"
            to="WhatWeNeed"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            What we need
          </Link>
        </li>
        <li className="nav-items">
          <Link
            activeClass="active"
            to="Contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Contact us
          </Link>
        </li>
        <li className="nav-items">
          <Link
            activeClass="active"
            to="Request"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Request a pack
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
