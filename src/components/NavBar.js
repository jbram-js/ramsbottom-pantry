import React, {useState} from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import logo from "../images/rp_logo.svg";
import "../styles/Controller.scss";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const showSidebar = () => setOpen(!open);
  const hideSidebar = () => setOpen(false);

  return (
    <div className="nav">
      <nav>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Ramsbottom Pantry logo" />
          </Link>
        </div>
        <ul
          className="nav-link"
          style={{
            transform: open ? "translateX(0px)" : "",
          }}
        >
          <li className="nav-link-item">
            <Link to="/" className="link" onClick={hideSidebar}>
              About us
            </Link>
          </li>
          <li className="nav-link-item">
            <Link to="/what-we-need" className="link" onClick={hideSidebar}>
              What we need
            </Link>
          </li>
          <li className="nav-link-item">
            <Link to="/get-in-touch" className="link" onClick={hideSidebar}>
              Get in touch
            </Link>
          </li>
          <li className="nav-link-item">
            <Link to="/our-links" className="link" onClick={hideSidebar}>
              Our links
            </Link>
          </li>
        </ul>
        <FontAwesomeIcon
          icon={faBars}
          onClick={showSidebar}
          className="nav-icon"
        />
      </nav>
    </div>
  );
};

export default NavBar;
