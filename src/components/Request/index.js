import React, { useRef, useState } from "react";
import "./formstyle.css";
import "../HeropageFeatures/home.css";
import "react-tooltip/dist/react-tooltip.css";
import NewRequest from "./newrequest";

const Form = () => {
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
                    <i>Request For New Guidance :</i>If you can't find the
                    installation steps for a tool or software you need, let us
                    know! Submit a request, and we’ll work on adding a
                    comprehensive guide for it.{" "}
                    <a href="#Add-new-content-data">click here</a>
                  </li>
                  <li>
                    <i>Suggest Improvements :</i>Found an existing guide but
                    think it could be improved? Whether it's adding more
                    detailed steps, updating outdated instructions, or including
                    images, your feedback is valuable. Use this option to
                    suggest changes or enhancements.{" "}
                    <a href="#Update-Existing-content-data">click here</a>
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </section>

      <NewRequest />

      <section
        className="Request_New_Installation_Guide"
        id="Update-Existing-content-data"
      >
        <div className="outer-form-div_new">
          <h1 className="form_heading">Suggest Improvements</h1>
          <p className="form_description">
            If you're interested in improving our existing installation guides,
            we'd love your feedback!<br/> <a href="https://github.com/jeetsuthar/InstallerArmory/issues" target="_blank"> Create New Issues on Github.</a>
          </p>
        </div>
      </section>

    </>
  );
};

export default Form;
