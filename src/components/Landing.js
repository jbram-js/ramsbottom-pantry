import React from "react";
import facebook from "../images/facebook.svg";
import instagram from "../images/instagram.svg";
import gofundme from "../images/gofundme.svg";
import "../styles/Controller.scss";

const Landing = () => {
  return (
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
  );
};

export default Landing;
