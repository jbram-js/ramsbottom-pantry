import React from "react";
import { Link } from "react-scroll";

const NavBar = () => {
    return (
    <div className="NavBar">
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
            About Us
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
            What We Need
          </Link>
        </li>
        <li className="nav-items">
          <Link
            activeClass="active"
            to="CanWeHelp"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Can We Help?
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
            Get In Touch
          </Link>
        </li>
      </ul>
    </div>

    )
}

export default NavBar;