import React from "react";
import { animateScroll } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";
import "../styles/Controller.scss";

const Footer = () => {
  const handleScrollToTop = () => {
    animateScroll.scrollToTop();
  };
  return (
    <div className="footer">
      <p>this is placeholder text.</p>
      <span className="scroll-button" onClick={() => handleScrollToTop()}>
        <FontAwesomeIcon icon={faArrowAltCircleUp} />
      </span>
    </div>
  );
};

export default Footer;
