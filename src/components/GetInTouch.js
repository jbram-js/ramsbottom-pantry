import React, {useState} from "react";
import {useForm} from "react-hook-form";
import pack from "../images/food3.jpg";
import "../styles/Controller.scss";
import {init, sendForm} from "emailjs-com";
init("user_VKy9wYkpvTzoPw85OauWg");

const GetInTouch = () => {
  const [contactNumber, setContactNumber] = useState("000000");
  const [statusMessage, setStatusMessage] = useState("Message");

  const generateContactNumber = () => {
    const numStr = "000000" + ((Math.random() * 1000000) | 0);
    setContactNumber(numStr.substring(numStr.length - 6));
  };

  const {register, handleSubmit} = useForm();
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
        <img src={pack} alt="" className="pack-image" />
        <h1>Get in touch</h1>

        <p className="request-p">
          For just £3 a week users can come down to the pantry on a Tuesday &
          Thursday for a 'shop'. <br />
          <br />
          If you would like any more information or to speak to a member of our
          team please complete the contact form below. A member of our team will
          get back to you as quickly as possible. Alternatively, you can get in
          touch through our social channels, phone and email. All links can be
          found through the Our links page.
        </p>
        <p className="status-message">{statusMessage}</p>
        <form
          id="contact-form"
          className="contact-form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            id="number"
            type="text"
            name="name"
            required={true}
            ref={register}
            placeholder="Name *"
          />

          <input
            id="number"
            type="number"
            name="phone_number"
            required={true}
            ref={register}
            placeholder="Phone number *"
          />
          <br />

          <input
            type="text"
            name="town"
            required={true}
            ref={register}
            placeholder="Email *"
          />
          <br />

          <br />
          <input
            name="message"
            maxLength="3000"
            ref={register}
            placeholder="Reason for contact"
          />
          <br />
          <input type="hidden" name="contact_number" value={contactNumber} />
          <input className="button" type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default GetInTouch;
