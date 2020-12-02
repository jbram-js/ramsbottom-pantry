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
      <div className="right-contact">
        <ul className="contact-list">
          <li className="contact-list-items">
            <a href="https://www.facebook.com/RamsbottomPantry" target="_blank">
              <img src={facebook} className="icons-contact" alt="Facebook" />
              <span>Visit our Facebook page</span>
            </a>
          </li>
          <li className="contact-list-items">
            <a
              href="https://www.instagram.com/ramsbottompantry/?igshid=cg47ldzp8d2d"
              target="_blank"
            >
              <img src={instagram} className="icons-contact" alt="Instagram" />
              <span>Follow us on Instagram</span>
            </a>
          </li>
          <li className="contact-list-items">
            <a
              href="https://www.gofundme.com/f/food-donations-ramsbottom?utm_source=customer&utm_campaign=p_cp+share-sheet&utm_medium=copy_link_all"
              target="_blank"
            >
              <img src={gofundme} className="icons-contact" alt="GoFundMe" />
              <span>Donate to our GoFundMe</span>
            </a>
          </li>
          <li className="contact-list-items">
            <a href="tel:+447710461761">
              <img src={phone} className="icons-contact" alt="Call" />
              <span>Give us a call</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
