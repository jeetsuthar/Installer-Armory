import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./formstyle.css";
import "../HeropageFeatures/home.css";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

const NewRequest = () => {
  const [inputValue, setInputValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false); // pop-up visibility
  const [isButtonDisabled, setIsButtonDisabled] = useState(false); // disable button
  const [errors, setErrors] = useState({}); // error message
  const form = useRef();

  const validateForm = () => {
    const errors = {};
    if (!nameValue) errors.name = "Name is required.";
    if (!inputValue) errors.topic = "Topic is required.";

    const checkedOS = Array.from(
      form.current.querySelectorAll("input[name='user_system']:checked")
    );
    if (checkedOS.length === 0)
      errors.system = "At least one OS must be selected.";

    return errors;
  };

  const handleNameChange = (event) => {
    setNameValue(event.target.value);
  };

  const handleTopicChange = (event) => {
    setInputValue(event.target.value);
  };

  const sendRequest = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsButtonDisabled(true);

    emailjs
      .sendForm("service_kb4gjuq", "template_9s79y07", form.current, {
        publicKey: "Z6TofgDV_m5jp2oI-",
      })
      .then(
        () => {
          setIsSubmitted(true); // Show pop-up box
          setInputValue(""); // Reset topic field
          setNameValue(""); // Reset name field
          form.current.reset();
          setIsButtonDisabled(false); // Re-enable the button
        },
        (error) => {
          alert("FAILED...", error.text);
          setIsButtonDisabled(false); // Re-enable the button
        }
      );
  };

  const closePopup = () => {
    setIsSubmitted(false);
  };

  return (
    <>
      <section
        className="Request_New_Installation_Guide"
        id="Add-new-content-data"
      >
        <div className="outer-form-div_new">
          <h1 className="form_heading">Request For New Guidance</h1>
          <p className="form_description">
            This form allows you to submit a new topic or request additional
            details for an existing topic.
          </p>
          <div className="form_data">
            <form ref={form} onSubmit={sendRequest}>
              {/* Full Name Input */}
              <div className="new_form_user_name">
                <label className="field_heading">
                  Enter Your Full Name <i className="star-important">*</i>
                </label>
                <input
                  className="label-margin"
                  type="text"
                  placeholder="Your Name"
                  name="user_name"
                  value={nameValue}
                  onChange={handleNameChange}
                />
                {errors.name && <p className="error_message">{errors.name}</p>}
              </div>

              {/* Topic Input */}
              <div className="new_form_user_name margin-10">
                <label className="field_heading">
                  Enter New Installation Topic (Make sure that the topic isn't
                  already available) <i className="star-important">*</i>
                </label>
                <input
                  className="label-margin"
                  type="text"
                  placeholder="Topic Name"
                  name="user_topic"
                  value={inputValue}
                  onChange={handleTopicChange}
                />
                {errors.topic && (
                  <p className="error_message">{errors.topic}</p>
                )}
              </div>

              {/* Operating System CheckBoxes */}
              <div className="new_form_checkbox_OS">
                <label className="margin-10">
                  Select Operating System <i className="star-important">*</i>
                </label>
                <label className="select_OS">
                  <input type="checkbox" value="Windows" name="user_system" />
                  <span id="windows">Windows</span>
                </label>
                <label className="select_OS">
                  <input type="checkbox" value="Linux" name="user_system" />
                  <span id="linux">Linux & Ubuntu</span>
                </label>
                <label className="select_OS">
                  <input type="checkbox" value="MacOs" name="user_system" />
                  <span id="macos">MacOS</span>
                </label>
                {errors.system && (
                  <p className="error_message">{errors.system}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                value="Send"
                className="request_button"
                data-tooltip-id="tooltips"
                data-tooltip-content={`Request New Installation Guidance For ${
                  !inputValue ? "Empty Topic" : inputValue
                }.`}
                data-tooltip-place="bottom"
                disabled={isButtonDisabled} // Disable the button based on state
              >
                {isButtonDisabled ? "Sending..." : "Send Request"}{" "}
                {/* Change button text */}
              </button>
            </form>
          </div>
        </div>

        {/* Success Popup */}

        {isSubmitted && (
          <div className="popup-overlay">
            <div className="popup-content">
              <img
                src="https://cdn-icons-png.flaticon.com/128/5610/5610944.png"
                alt=""
              />
              <h4>Your Request Sended Successfully.</h4>
              <button onClick={closePopup} className="close_popup_button">
                Close
              </button>
            </div>
          </div>
        )}

        <Tooltip id="tooltips" />
      </section>
    </>
  );
};

export default NewRequest;
