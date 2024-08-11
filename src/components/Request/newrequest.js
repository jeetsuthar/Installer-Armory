import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./formstyle.css";
import "../HeropageFeatures/home.css";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

const newrequest = () => {
  const [inputValue, setInputValue] = useState("");

  const NewRequest = (event) => {
    setInputValue(event.target.value);
  };
  const form = useRef();

  const sendRequest = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_kcxb529", "template_ioqujj4", form.current, {
        publicKey: "rSiLb_tTRqkeg_wgd",
      })
      .then(
        () => {
          alert("Request For Adding New Installation  - Successfully");
           // Reset form fields and state
           setInputValue("");
           form.current.reset();
        },
        (error) => {
          alert("FAILED...", error.text);
        }
      );
  };
  return (
    <>
      <section
        className="Request_New_Installation_Guide"
        id="Add-new-content-data"
      >
        <div className="outer-form-div_new">
          <h1 className="form_heading">Request New Installation Guide</h1>
          <p className="form_description">
            This form is help you to send the new topic information and Add new
            information related to you topic
          </p>
          <div className="form_data">
            <form ref={form} onSubmit={sendRequest}>
              {/* Adding New Topic name box */}
              <div className="new_form_user_name">
                <label className="field_heading">
                  Enter New Installation Topic ( Make sure that The Topic isn't
                  already available )<i className="star-important">*</i>
                </label>
                <input
                  className="label-margin"
                  type="text"
                  placeholder="New Topic | Installer-Armoury"
                  name="user_topic"
                  value={inputValue}
                  onChange={NewRequest}
                />
              </div>
              {/* Operating System CheckBoxes */}
              <div className="new_form_checkbox_OS">
                <label className="field_heading">
                  Select Operating System<i className="star-important">*</i>{" "}
                </label>
                <label>
                  <input type="checkbox" value="Windows" name="user_system" />
                  <span id="windows">Windows</span>
                </label>
                <label>
                  <input type="checkbox" value="Linux" name="user_system" />
                  <span id="linux">Linux & Ubuntu</span>
                </label>
                <label>
                  <input type="checkbox" value="MacOs" name="user_system" />
                  <span id="macos">MacOS</span>
                </label>
              </div>
              {/* Email and OTP verification Boxes */}
              <div className="Email_verification_box">
                <div className="individual_box">
                  <label className="details_verified">
                    Enter Your Own Email <i className="star-important">*</i>
                  </label>

                  <div className="Email_verification_form margin">
                    <input
                      type="email"
                      name="user_email"
                      placeholder="UserEmail1234@gmail.com"
                    />
                    <button>Get OTP</button>
                  </div>
                </div>
                <div className="individual_box">
                  <label className="details_verified">
                    Enter 4 Digit OTP ( We will send You a verification code on
                    your Email ) <i className="star-important">*</i>
                  </label>

                  <div className="Email_verification_form margin">
                    <input
                      type="number"
                      name="user_status"
                      placeholder="One Time Password"
                    />
                    <button>verify Email</button>
                  </div>
                </div>
              </div>
              {/* submit button Box*/}
              <button
                type="submit"
                value="Send"
                className="request_button"
                data-tooltip-id="tooltips"
                data-tooltip-content={`Request New Installation Guide for ${
                  !inputValue ? " Unknown Topic" : inputValue
                }.`}
                data-tooltip-place="bottom"
              >
                Send Request
              </button>
            </form>
          </div>
        </div>
        <Tooltip id="tooltips" />
      </section>
    </>
  );
};

export default newrequest;
