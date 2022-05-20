import React from "react";
import Map from "./MapContainer";
import facebook from "../images/facebook.svg";
import instagram from "../images/instagram.svg";
import gofundme from "../images/gofundme.svg";
import phone from "../images/call.svg";
import email from "../images/email.svg";
import contact from "../images/contact.jpg";
import twitter from "../images/twitter.svg";
import "../styles/Controller.scss";

const Contact = () => {
  return (
    <div className="contact">
      <img src={contact} alt="contact us image" className="contact-image" />
      <h1>Get in touch</h1>

      <p className="contact-p">
        If you would like to keep up to date with all our latest news, events &
        fundraisers follow us on social media.
        <br />
        <br />
        If you are in need of our help you can fill in the form through the
        request a pack page. If you would like to discuss anything further or
        wish to help us then please drop us an email or give us a call.
        <br />
        <br />
        Finally, if you can support the pantry with donations of any size our
        GoFundMe page is always active. If you would prefer to set up a direct
        debit/standing order please drop us an email and we will provide you
        with our account details.
      </p>
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
          <a href="https://twitter.com/rammypantry" target="_blank">
            <img src={twitter} className="icons-contact" alt="Twitter" />
            <span>Follow us on Twitter</span>
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
        <li className="contact-list-items">
          <a
            href="https://www.gofundme.com/f/ramsbottom-pantry-food-bank?qid=3703310c60b9b3f29bab282f04722fbf"
            target="_blank"
          >
            <img src={gofundme} className="icons-contact" alt="GoFundMe" />
            <span>Donate to our GoFundMe</span>
          </a>
        </li>
      </ul>
      <h1>Where to find us</h1>
      <p className="contact-p">
        Ramsbottom Pantry is located within the carpark of Christ Church
        Ramsbottom. Our full address is{" "}
        <span className="postcode">
          Ramsbottom Pantry, Christ Church, Great Eaves Road, Ramsbottom, BL0
          0PX
        </span>
        .
      </p>
      <Map />
    </div>
  );
};

export default Contact;
