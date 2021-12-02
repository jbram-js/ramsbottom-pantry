import React from "react";
import {Link, animateScroll} from "react-scroll";
import logo from "../images/rp_logo.svg";
import facebook from "../images/facebook.svg";
import instagram from "../images/instagram.svg";
import gofundme from "../images/gofundme.svg";
import crowdfunder from "../images/crowdfunder.png";
import "../styles/Controller.scss";

const NavBar = () => {
  const handleScrollToTop = () => {
    animateScroll.scrollToTop();
  };

  return (
    <div className="nav">
      <div className="left">
        <img
          src={logo}
          alt="Ramsbottom Pantry logo"
          className="logo"
          onClick={() => handleScrollToTop()}
        />
      </div>
      <div className="middle">
        <ul className="nav-list">
          <li className="nav-items">
            <Link
              activeClass="active"
              to="news"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              News
            </Link>
          </li>
          <li className="nav-items">
            <Link
              activeClass="active"
              to="about"
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
              to="wwn"
              spy={true}
              smooth={true}
              offset={-30}
              duration={500}
            >
              What we need
            </Link>
          </li>
          <li className="nav-items">
            <Link
              activeClass="active"
              to="request"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              Request a pack
            </Link>
          </li>
          <li className="nav-items">
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
            >
              Contact us
            </Link>
          </li>
        </ul>
      </div>
      <div className="right">
        <ul className="social-links">
          <li>
            <a
              href="https://www.facebook.com/RamsbottomPantry"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img src={facebook} className="icons" alt="Facebook" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/ramsbottompantry/?igshid=cg47ldzp8d2d"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img src={instagram} className="icons" alt="Instagram" />
            </a>
          </li>
          <li>
            <a
              href="https://www.gofundme.com/f/ramsbottom-pantry-food-bank?qid=3703310c60b9b3f29bab282f04722fbf"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img src={gofundme} className="icons" alt="GoFundMe" />
            </a>
          </li>
          <li>
            <a
              href="https://www.crowdfunder.co.uk/ramsbottompantry"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img src={crowdfunder} className="icons" alt="Crowdfunder" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
