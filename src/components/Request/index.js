import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./formstyle.css";
import "../HeropageFeatures/home.css";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import { Tooltip as ReactTooltip } from "react-tooltip";
const Form = () => {
  // Initialize state to store the input value
  const [inputValue, setInputValue] = useState("");
  const [HeadingValue, setHeadingValue] = useState("");
  const [TopicName, setTopicName] = useState("");

  // Handle change in input field
  const NewRequest = (event) => {
    setInputValue(event.target.value);
  };
  const ExistingRequestHeading = (event) => {
    setHeadingValue(event.target.value);
  };
  const ExistingRequestTopic = (event) => {
    setTopicName(event.target.value);
  };
  const form = useRef();

  const SendNewRequest = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_kcxb529", "template_ioqujj4", form.current, {
        publicKey: "rSiLb_tTRqkeg_wgd",
      })
      .then(
        () => {
          alert("Request For Adding New Installation  - Successfully");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
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
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <>
      <section className="Intro_section">
        <div className="Intro_Outer_Div">
          <div className="Glass_Effect">
            <div className="Glass_Heading">
              <h1>About Request Form </h1>
            </div>
            <div className="Glass_Description">
              <p>
                <ul className="two_diff_form_guide">
                  <li className="bottom-space">
                    {" "}
                    <i>
                      Request New Installation Guide:
                    </i>{" "}
                    If you can't find the installation steps for a tool or
                    software you need, let us know! Submit a request, and we’ll
                    work on adding a comprehensive guide for it. <a href="#Add-new-content-data">click here</a>
                  </li>
                  <li>
                    <i>
                      Customize Existing Installation Guide:
                    </i>{" "}
                    Found an existing guide but think it could be improved?
                    Whether it's adding more detailed steps, updating outdated
                    instructions, or including images, your feedback is
                    valuable. Use this option to suggest changes or
                    enhancements. <a href="#Update-Existing-content-data">click here</a>
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </section>

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
            <form ref={form} onSubmit={SendNewRequest}>
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
                  <input type="checkbox" value="Windows" name="user_os" />
                  <span id="windows">Windows</span>
                </label>
                <label>
                  <input type="checkbox" value="Linux" name="user_os" />
                  <span id="linux">Linux & Ubuntu</span>
                </label>
                <label>
                  <input type="checkbox" value="MacOs" name="user_os" />
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
                      name="user_email"
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

export default Form;
