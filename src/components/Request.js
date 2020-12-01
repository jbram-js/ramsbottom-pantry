import React, { useState } from "react";
import { useForm } from "react-hook-form";
import pack from "../images/food3.jpg";
import { init, sendForm } from "emailjs-com";
init("user_VKy9wYkpvTzoPw85OauWg");

const Request = () => {
  const [contactNumber, setContactNumber] = useState("000000");
  const [statusMessage, setStatusMessage] = useState("Message");

  const generateContactNumber = () => {
    const numStr = "000000" + ((Math.random() * 1000000) | 0);
    setContactNumber(numStr.substring(numStr.length - 6));
  };

  const { register, handleSubmit, watch, errors } = useForm();
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
          Once the request has been submitted a member of the Ramsbottom Pantry
          team will be in contact to arrange delivery/collection.
        </p>
        <p className="required-p">* = required field</p>

        <p className="status-message">{statusMessage}</p>
        <form id="form" onSubmit={handleSubmit(onSubmit)}>
          {errors.name && errors.name.type === "required" && (
            <div role="alert">
              Name is required
              <br />
            </div>
          )}
          <input
            className="left-form"
            type="text"
            name="name"
            aria-invalid={errors.name ? "true" : "false"}
            ref={register({ required: true })}
            placeholder="Name *"
          />
          <br />
          {errors.phone_number && errors.phone_number.type === "required" && (
            <div role="alert">
              Phone number is required
              <br />
            </div>
          )}
          <input
            className="right-form"
            type="number"
            name="phone_number"
            aria-invalid={errors.contact_number ? "true" : "false"}
            ref={register({ required: true })}
            placeholder="Phone number *"
          />
          <br />
          {errors.number_of_adults &&
            errors.number_of_adults.type === "required" && (
              <div role="alert">
                Number of adults is required
                <br />
              </div>
            )}
          <input
            className="left-form"
            type="number"
            name="number_of_adults"
            aria-invalid={errors.number_of_adults ? "true" : "false"}
            ref={register({ required: true })}
            placeholder="Number of adults *"
          />
          <br />
          {errors.number_of_children &&
            errors.number_of_children.type === "required" && (
              <div role="alert">
                Number of children is required
                <br />
              </div>
            )}
          <input
            className="right-form"
            type="number"
            name="number_of_children"
            aria-invalid={errors.number_of_children ? "true" : "false"}
            ref={register({ required: true })}
            placeholder="Number of children *"
          />
          <br />
          {errors.address && errors.address.type === "required" && (
            <div role="alert">
              Address is required
              <br />
            </div>
          )}
          <input
            className="left-form"
            type="text"
            name="address"
            aria-invalid={errors.address ? "true" : "false"}
            ref={register({ required: true })}
            placeholder="Address *"
          />
          <br />
          {errors.town && errors.town.type === "required" && (
            <div role="alert">
              Town is required
              <br />
            </div>
          )}
          <input
            className="right-form"
            type="text"
            name="town *"
            aria-invalid={errors.town ? "true" : "false"}
            ref={register({ required: true })}
            placeholder="Town *"
          />
          <br />
          {errors.postcode && errors.postcode.type === "required" && (
            <div role="alert">
              Postcode is required
              <br />
            </div>
          )}
          <input
            className="left-form"
            type="text"
            name="postcode"
            aria-invalid={errors.postcode ? "true" : "false"}
            ref={register({ required: true })}
            placeholder="Postcode *"
          />
          <br />
          <input
            className="right-form"
            type="text"
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
        <img
          src={pack}
          alt="Image of a pack being made"
          className="pack-image"
        />
      </div>
    </div>
  );
};

export default Request;
