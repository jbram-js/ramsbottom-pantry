import React from "react";
import community from "../images/community.svg";

const About = () => {
  return (
    <div className="About" id="about">
      <h1>About Us</h1>
      <img
        src={community}
        alt="Ramsbottom Pantry community"
        className="community"
      ></img>
      <p className="about-p">
        We are a voluntary food pantry based in Ramsbottom. Our function is to
        be the arms that reach out to the community directly. We are a
        completely donation driven food pantry who rely on the generosity of the
        local community to help those who need it. 2020 has been a year like no
        other, anybody can be in need of emergency food at anytime. There is no
        'type' of person. When a crisis hits we aim to bridge the gap and offer
        our support. Whether you have been furloughed, had your ours reduced,
        lost your job, waiting on a Universal Credit payment or had unexpected
        additional expenses we are here to help.
      </p>
    </div>
  );
};

export default About;
