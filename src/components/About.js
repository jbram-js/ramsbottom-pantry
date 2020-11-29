import React from "react";
import community from "../images/community.svg";
import people from "../images/people.jpg";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="left-about">
        <h1>About us</h1>
        <img
          src={community}
          alt="Ramsbottom Pantry community"
          className="community"
        />
        <p className="about-p">
          We are a voluntary food pantry based in Ramsbottom. Our function is to
          be the arms that reach out to the community directly. We are a
          completely donation driven food pantry who rely on the generosity of
          the local community to help those who need it.
          <br />
          <br />
          2020 has been a year like no other, anybody can be in need of
          emergency food at anytime. There is no 'type' of person. When a crisis
          hits we aim to bridge the gap and offer our support. Whether you have
          been furloughed, had your hours reduced, lost your job, waiting on a
          Universal Credit payment or had unexpected additional expenses we are
          here to help.
        </p>
      </div>
      <div className="right-about">
        <img
          src={people}
          alt="People of Ramsbottom Pantry"
          className="people-image"
        />
      </div>
    </div>
  );
};

export default About;
