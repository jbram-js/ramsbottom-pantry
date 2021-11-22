import React from "react";
import Map from "./MapContainer";
import facebook from "../images/facebook.svg";
import instagram from "../images/instagram.svg";
import gofundme from "../images/gofundme.svg";
import phone from "../images/call.svg";
import email from "../images/email.svg";
import crowdfunder from "../images/crowdfunder.png";
import "../styles/Controller.scss";

const Contact = () => {
  return (
    <div className="contact">
      <div className="left-contact">
        <h1>Contact us</h1>
        <p className="contact-p">
          Ramsbottom Pantry is located within the carpark of Christ Church
          Ramsbottom. Our full address is{" "}
          <span className="postcode">
            Ramsbottom Pantry, Christ Church, Great Eaves Road, Ramsbottom,
            Bury, BL0 0PX
          </span>
          .
        </p>
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
              href="https://www.crowdfunder.co.uk/ramsbottompantry"
              target="_blank"
            >
              <img
                src={crowdfunder}
                className="icons-contact"
                alt="Crowdfunder"
              />
              <span>Support our Crowdfunder</span>
            </a>
          </li>
          <li className="contact-list-items">
            <a
              href="https://www.gofundme.com/f/ramsbottom-pantry-food-bank?qid=3703310c60b9b3f29bab282f04722fbf"
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
          <li className="contact-list-items">
            <a href="mailto:ramsbottompantry@gmail.com">
              <img src={email} className="icons-contact" alt="Email" />
              <span>Drop us an email</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
