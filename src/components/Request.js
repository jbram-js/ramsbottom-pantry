import React, { useState } from "react";
import { useForm } from "react-hook-form";
import pack from "../images/food3.jpg";
import "../styles/Controller.scss";
import { init, sendForm } from "emailjs-com";
init("user_VKy9wYkpvTzoPw85OauWg");

const Request = () => {
  const [contactNumber, setContactNumber] = useState("000000");
  const [statusMessage, setStatusMessage] = useState("Message");

  const generateContactNumber = () => {
    const numStr = "000000" + ((Math.random() * 1000000) | 0);
    setContactNumber(numStr.substring(numStr.length - 6));
  };

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const statusMessage = document.querySelector(".status-message");
    const form = document.querySelector("#contact-form");
    generateContactNumber();

    sendForm("default_service", "ramsbottom_pantry", "#contact-form").then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        form.reset();
        setStatusMessage("Message sent!");
        statusMessage.className = "status-message success";
        setTimeout(() => {
          statusMessage.className = "status-message";
        }, 5000);
      },
      function (error) {
        console.log("FAILED...", error);
        setStatusMessage("Failed to send message! Please try again later.");
        statusMessage.className = "status-message failure";
        setTimeout(() => {
          statusMessage.className = "status-message";
        }, 5000);
      }
    );
  };

  return (
    <div className="request">
      <div className="left-request">
        <h1>Request a pack</h1>
        <p className="request-p">
          If you are in need of our help please fill in the request form below.
          We currently cover address in{" "}
          <span className="postcode">BL0, BL8 & BL9 postcodes</span>. Once the
          request has been submitted a member of the Ramsbottom Pantry team will
          be in contact to arrange delivery/collection.
        </p>
        <p className="status-message">{statusMessage}</p>
        <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="left-form"
            id="number"
            type="text"
            name="name"
            required={true}
            ref={register}
            placeholder="Name *"
          />

          <input
            className="right-form"
            id="number"
            type="number"
            name="phone_number"
            required={true}
            ref={register}
            placeholder="Phone number *"
          />
          <br />

          <input
            className="left-form"
            type="number"
            name="number_of_adults"
            required={true}
            ref={register}
            placeholder="Number of adults *"
          />
          <br />

          <input
            className="right-form"
            type="number"
            name="number_of_children"
            required={true}
            ref={register}
            placeholder="Number of children *"
          />
          <br />

          <input
            className="left-form"
            type="text"
            name="address"
            required={true}
            ref={register}
            placeholder="Address *"
          />
          <br />

          <input
            className="right-form"
            type="text"
            name="town"
            required={true}
            ref={register}
            placeholder="Town *"
          />
          <br />

          <input
            className="left-form"
            type="text"
            name="postcode"
            required={true}
            ref={register}
            placeholder="Postcode *"
          />
          <br />
          <input
            className="right-form"
            name="message"
            maxLength="300"
            ref={register}
            placeholder="Allergies, dietary requirements, pets..."
          />
          <br />
          <input type="hidden" name="contact_number" value={contactNumber} />
          <input className="button" type="submit" value="Send" />
        </form>
      </div>
      <div className="right-request">
        <img src={pack} alt="" className="pack-image" />
      </div>
    </div>
  );
};

export default Request;
