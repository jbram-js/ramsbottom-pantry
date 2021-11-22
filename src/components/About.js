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
          <b>
            PLEASE SUPPORT OUR CROWDFUNDER BY FOLLOWING THE LINK{" "}
            <a
              href="https://www.crowdfunder.co.uk/ramsbottompantry"
              target="_blank"
              alt="Crowdfunder"
            >
              HERE
            </a>
            . THE FUNDING WILL REALLY MAKE A DIFFERENCE TO PEOPLES LIVES.
          </b>
          <br />
          <br />
          We are a voluntary food pantry based in Ramsbottom. Our function is to
          be the arms that reach out to the community directly. We are a
          completely donation driven food pantry who rely on the generosity of
          the local community to help those who need it.
          <br />
          <br />
          The COVID-19 pandemic has brought unprecedented challenges to so many
          peoples lives and has truly highlighted how anybody can be in need of
          emergency food at anytime. There is no 'type' of person. When a crisis
          hits we aim to bridge the gap and offer our support. Whether you have
          been furloughed, had your hours reduced, lost your job, waiting on a
          Universal Credit payment or had unexpected additional expenses we are
          here to help.
          <br />
          <br />
          For just £3 a week user can come down to the pantry and select food,
          drink and sanitary items they wish from the categories outlined. We
          are open Tuesdays & Thursdays between 12-3 down at Christ Church
          Ramsbottom.
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
