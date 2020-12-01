import React from "react";
import Map from "./MapContainer";
import facebook from "../images/facebook.svg";
import instagram from "../images/instagram.svg";
import gofundme from "../images/gofundme.svg";
import phone from "../images/call.svg";
import "../styles/Controller.scss";

const Contact = () => {
  return (
    <div className="contact">
      <div className="left-contact">
        <h1>Contact Us</h1>
        <Map />
      </div>
      <div className="right-contact"></div>
      <ul className="contact-links">
        <li>
          <a href="https://www.facebook.com/RamsbottomPantry" target="_blank">
            <img src={facebook} className="icons" alt="Facebook" />
            Visit our Facebook page
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/ramsbottompantry/?igshid=cg47ldzp8d2d"
            target="_blank"
          >
            <img src={instagram} className="icons" alt="Instagram" />
            Follow us on Instagram
          </a>
        </li>
        <li>
          <a
            href="https://www.gofundme.com/f/food-donations-ramsbottom?utm_source=customer&utm_campaign=p_cp+share-sheet&utm_medium=copy_link_all"
            target="_blank"
          >
            <img src={gofundme} className="icons" alt="GoFundMe" />
            Donate to our GoFundMe
          </a>
        </li>
        <li>
          <a href="tel:+447710461761">
            <img src={phone} className="icons" alt="Call" />
            Give us a call
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
