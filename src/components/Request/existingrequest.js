import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./formstyle.css";
import "../HeropageFeatures/home.css";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

const newrequest = () => {
  // Initialize state to store the input value
  const [HeadingValue, setHeadingValue] = useState("");
  const [TopicName, setTopicName] = useState("");

  // Handle change in input field
  const form = useRef();
  const ExistingRequestHeading = (event) => {
    setHeadingValue(event.target.value);
  };
  const ExistingRequestTopic = (event) => {
    setTopicName(event.target.value);
  };

  const SendExistingRequest = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_kcxb529", "template_77yk1h9", form.current, {
        publicKey: "rSiLb_tTRqkeg_wgd",
      })
      .then(
        () => {
          alert("Request For Updating Existing Content - Successfully");
          // Reset form fields and state
          setHeadingValue("");
          setTopicName("");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <>
      <section
        className="Request_New_Installation_Guide"
        id="Update-Existing-content-data"
      >
        <div className="outer-form-div_new">
          <h1 className="form_heading">
            Request for Customize Existing Installation Guide
          </h1>
          <p className="form_description">
            Interested in updating or editing installation details yourself?{" "}
            <a href="">Click here to go to the guidance page</a> for
            instructions on how to do this.
          </p>

          <div className="form_data">
            <form ref={form} onSubmit={SendExistingRequest}>
              {/* Heading and Topic boxes */}
              <div className="customize_path">
                <div className="new_form_user_name">
                  <label className="field_heading">
                    Enter Heading Name ( visit Footer)
                    <i className="star-important">*</i>
                  </label>
                  <input
                    className="label-margin"
                    type="text"
                    placeholder="Existing Heading "
                    name="user_heading"
                    value={HeadingValue}
                    onChange={ExistingRequestHeading}
                  />
                </div>
                <div className="new_form_user_name">
                  <label className="field_heading">
                    Enter Topic Name<i className="star-important">*</i>
                  </label>
                  <input
                    className="label-margin"
                    type="text"
                    placeholder="Existing Topic "
                    name="user_topic_update"
                    value={TopicName}
                    onChange={ExistingRequestTopic}
                  />
                </div>
              </div>
              {/* customization steps input box*/}
              <div>
                <div className="customization_step_and_textarea Modifying_steps">
                  <label className="field_heading">
                    Enter Step Number Where you want to Edit and Updating
                    content
                    {/* <i className="star-important">*</i> */}
                  </label>
                  <div className="new_form_user_name label-margin">
                    <input
                      type="text"
                      placeholder="Steps (1,2,3....) "
                      name="user_step"
                    />
                  </div>
                </div>
                <div className="customization_step_and_textarea Modifying_steps">
                  <label className="field_heading">
                    Enter Step Number Where you want to Edit and Updating
                    content
                    {/* <i className="star-important">*</i> */}
                  </label>
                  <div className="new_form_user_name label-margin">
                    <input
                      type="text"
                      placeholder="Massage | Installer-Armoury"
                      name="user_message"
                    />
                  </div>
                </div>
              </div>
              {/* Operating System checkboxes*/}
              <div className="new_form_checkbox_OS">
                <label className="field_heading">
                  Select Operating System<i className="star-important">*</i>{" "}
                </label>
                <label>
                  <input type="checkbox" value="Windows" name="user_os" />
                  <span id="windows">For Windows Installation </span>
                </label>
                <label>
                  <input type="checkbox" value="Linux" name="user_os" />
                  <span id="linux">For Linux Installation</span>
                </label>
                <label>
                  <input type="checkbox" value="MacOs" name="user_os" />
                  <span id="macos">For MacOS Installation</span>
                </label>
              </div>
              {/* Email verification Box ( Email and OTP) boxes */}
              <div className="Email_verification_box">
                <div className="individual_box">
                  <label className="details_verified">
                    Enter Your Own Email <i className="star-important">*</i>
                  </label>

                  <div className="Email_verification_form margin">
                    <input
                      type="email"
                      name="user_email_for_update"
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
                      // name=""
                      placeholder="One Time Password"
                    />
                    <button>verify Email</button>
                  </div>
                </div>
              </div>
              {/* submit button box */}
              <button
                type="submit"
                value="Send"
                className="request_button"
                data-tooltip-id="tooltips"
                data-tooltip-content={`Send a Request to Update the ${
                  !TopicName ? "Topic" : TopicName
                } in ${
                  !HeadingValue ? "Heading" : HeadingValue
                } for new changes and updates.`}
                data-tooltip-place="bottom"
              >
                Send For Updating Content
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
