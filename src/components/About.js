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
      <div className="about-content">
        <img
          src={community}
          alt="Ramsbottom Pantry community"
          className="community"
        />
        <p className="about-p">
          We are a voluntary food pantry based in Ramsbottom. Our function is to
          be the arms that reach out to the community directly. We are a
          completely donation-driven food pantry that that relies on the local community's generosity to help those who need it.
          <br />
          <br />
          The Cost of Living crisis has brought unprecedented challenges to so many people's lives and
          have truly highlighted how anybody can be in need of emergency food at
          any time. There is no 'type' of person. When a crisis hits we aim to
          bridge the gap and offer our support. No matter your circumstances we
          are here to provide completely judgement free help.
          <br />
          <br />
          For just £5 a week anybody in need can come down to the pantry and
          select food, drink and sanitary items they wish from the categories
          outlined. We are open every Tuesdays & Thursdays between 10:00 - 12:00
          down at Christ Church Ramsbottom.
          <br />
          <br />
          If you are in need of any further help or support please do not
          hesitate to speak to one of our friendly volunteers. As much as
          possible, we can assist with putting you in contact with the local
          authorities for advice on what support you may be entitled to.
        </p>
       <object data="https://drive.google.com/file/d/12P1TJABNydu0UXP85ZwCSN4D8R5-tFSa/view?usp=sharing" type="application/pdf" width="100%" height="100%">
  </object>
        <h1>Thursday drop-in cafe</h1>
        <br />
        <p className="about-p">
          Every Thursday between 10:00 - 12:00, Christ Church run a free drop-in
          cafe in conjunction with the pantry opening times. Why not join us for
          a warm welcome with complimentary hot drinks, cake and a friendly
          chat. Whether you are out for a walk, feeling lonely, anxious or just
          need of homemade cake - all are welcome. Bury floating support are
          also in attendance to provide any housing advice.
        </p>
      </div>
    </div>
  );
};

export default About;
