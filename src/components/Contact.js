import React from "react";
import Map from "./MapContainer";
import "../styles/Controller.scss";

const Contact = () => {
  return (
    <div className="Contact">
      <div className="left-contact">
        <h1>Contact Us</h1>
        <Map />
      </div>
      <div className="right1-contact"></div>
      <div className="right2-contact"></div>
    </div>
  );
};

export default Contact;
