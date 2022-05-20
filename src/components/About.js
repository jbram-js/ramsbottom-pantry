import React from "react";
import "../styles/Controller.scss";
import facebook from "../images/facebook.svg";
import instagram from "../images/instagram.svg";
import gofundme from "../images/gofundme.svg";
import community from "../images/community.svg";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="landing">
        <div class="landing-card">
          <img src={facebook} className="card-image" />
          <a href="https://www.facebook.com/RamsbottomPantry" target="_blank">
            <span class="card-details">
              Like our Facebook page for all the latest events, news &
              fundraisers.
            </span>
          </a>
        </div>
        <div class="landing-card">
          <img src={gofundme} className="card-image" />
          <a
            href="https://www.gofundme.com/f/ramsbottom-pantry-food-bank?qid=3703310c60b9b3f29bab282f04722fbf"
            target="_blank"
          >
            <span class="card-details">
              Donate to our GoFundMe to ensure we can continue helping those in
              need.
            </span>
          </a>
        </div>
        <div class="landing-card">
          <img src={instagram} className="card-image" />
          <a
            href="https://www.instagram.com/ramsbottompantry/?igshid=cg47ldzp8d2d"
            target="_blank"
          >
            <span class="card-details">
              Follow us on Instagram to see how we have helped the Ramsbottom
              community.
            </span>
          </a>
        </div>
      </div>
      <div className="left-about">
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
    </div>
  );
};

export default About;
