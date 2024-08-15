import React from "react";
// import { Link } from "react-router-dom";
import Logo from "../../../static/img/InstallerArmory.png";
import "./style.css";
import Link from "@docusaurus/Link";
const Footer = () => {
  return (
    <footer>
      <section className="footer_section">
        <div className="main-footer-container">
          <div className="footer_top_content">
            <div className="footer_top_content">
              <div className="footer_top_content_logo">
                <Link to="">
                  <img src={Logo} alt="logo" />
                  <h2>InstallerArmory</h2>
                </Link>
              </div>

              <div className="footer_top_content_social_links">
                <div className="footer_top_content_social_links_inner_div">
                  <Link to="">
                    F<span>acebook</span>
                  </Link>{" "}
                  {/* Facebook */}
                  <Link to="">
                    I<span>nstagram</span>
                  </Link>{" "}
                  {/* Instagram */}
                  <Link to="">
                    L<span>inkedIn</span>
                  </Link>{" "}
                  {/* LinkedIn */}
                  <Link to="">
                    T<span>witter</span>
                  </Link>{" "}
                  {/* Twiter */}
                  <Link to="">
                    G<span>itHub</span>
                  </Link>{" "}
                </div>
                {/* GitHub */}
              </div>
            </div>
          </div>

          <div className="footer_bottom_content">
            <div className="footer_links_parts">
              <div className="footer_links_parts_heading">
                <h3>Company</h3>
              </div>
              <div className="footer_links_parts_multiple_link">
                <ul>
                  <Link to="">
                    <li>About Us</li>
                  </Link>
                  <Link to="">
                    <li>Legal</li>
                  </Link>
                  <Link to="/request">
                    <li>Request Us</li>
                  </Link>
                  <Link to="">
                    <li>Terms and conditions</li>
                  </Link>
                  <Link to="">
                    <li>Careers</li>
                  </Link>
                  <Link to="">
                    <li>In Media</li>
                  </Link>
                </ul>
              </div>
            </div>

            <div className="footer_links_parts">
              <div className="footer_links_parts_heading">
                <h3>Languages</h3>
              </div>
              <div className="footer_links_parts_multiple_link">
                <ul>
                  {/*  */}
                  <Link to="/docs/Programming/python/">
                    <li>Python</li>
                  </Link>
                  <Link to="/docs/Programming/PHP">
                    <li>PHP</li>
                  </Link>
                  <Link to="/docs/Programming/java">
                    <li>Java</li>
                  </Link>
                  <Link to="/docs/Programming/JavaScript">
                    <li>Javascript</li>
                  </Link>
                  <Link to="/docs/Programming/CPlusPlus">
                    <li>C++</li>
                  </Link>
                  <Link to="/docs/Programming/Swift">
                    <li>Swift</li>
                  </Link>
                  <Link to="/docs/Programming/Kotlin">
                    <li>Kotlin</li>
                  </Link>
                  <Link to="/docs/Programming/TypeScript">
                    <li>Typescript</li>
                  </Link>
                </ul>
              </div>
            </div>

            <div className="footer_links_parts">
              <div className="footer_links_parts_heading">
                <h3>IDEs & Code Editors</h3>
              </div>
              <div className="footer_links_parts_multiple_link">
                <ul>
                  <Link to="/docs/Code_Editors/vs_code">
                    <li>VS Code</li>
                  </Link>
                  <Link to="/docs/Code_Editors/PyCharm">
                    <li>PyCharm</li>
                  </Link>
                  <Link to="/docs/Code_Editors/InterlliJ_IDEA">
                    <li>IntelliJ IDEA</li>
                  </Link>
                  <Link to="/docs/Code_Editors/Eclipse">
                    <li>Eclipse</li>
                  </Link>
                  <Link to="/docs/Code_Editors/RStudio">
                    <li>RStudio</li>
                  </Link>
                  <Link to="/docs/Code_Editors/Xcode">
                    <li>Xcode</li>
                  </Link>
                  <Link to="/docs/Code_Editors/Notepad">
                    <li>Notepad++</li>
                  </Link>
                  <Link to="/docs/Code_Editors/Android_Studio">
                    <li>Android Studio</li>
                  </Link>
                </ul>
              </div>
            </div>

            <div className="footer_links_parts">
              <div className="footer_links_parts_heading">
                <h3>Version Control System</h3>
              </div>
              <div className="footer_links_parts_multiple_link">
                <ul>
                  <Link to="">
                    <li>Git</li>
                  </Link>
                  <Link to="">
                    <li>Github Desktop</li>
                  </Link>
                  <Link to="">
                    <li>Sourcetree</li>
                  </Link>
                  <Link to="">
                    <li>BitBucket</li>
                  </Link>
                  <Link to="">
                    <li>Mercurial</li>
                  </Link>
                </ul>
              </div>
            </div>

            <div className="footer_links_parts">
              <div className="footer_links_parts_heading">
                <h3>Database Management System</h3>
              </div>
              <div className="footer_links_parts_multiple_link">
                <ul>
                  <Link to="">
                    <li>MySQL</li>
                  </Link>
                  <Link to="">
                    <li>PostgreSQL</li>
                  </Link>
                  <Link to="">
                    <li>SQLite</li>
                  </Link>
                  <Link to="">
                    <li>MongoDB</li>
                  </Link>
                  <Link to="">
                    <li>Oracle Database</li>
                  </Link>
                  <Link to="">
                    <li>Microsoft SQL Server</li>
                  </Link>
                  <Link to="">
                    <li>Firebase</li>
                  </Link>
                </ul>
              </div>
            </div>

            <div className="footer_links_parts">
              <div className="footer_links_parts_heading">
                <h3>Web Frameworks</h3>
              </div>
              <div className="footer_links_parts_multiple_link">
                <ul>
                  <Link to="">
                    <li>Node.js</li>
                  </Link>
                  <Link to="">
                    <li>React.js</li>
                  </Link>
                  <Link to="">
                    <li>Angular</li>
                  </Link>
                  <Link to="">
                    <li>Vue</li>
                  </Link>
                  <Link to="">
                    <li>Django</li>
                  </Link>
                  <Link to="">
                    <li>Flask</li>
                  </Link>
                  <Link to="">
                    <li>Laravel</li>
                  </Link>
                  <Link to="">
                    <li>ASP.NET</li>
                  </Link>
                </ul>
              </div>
            </div>

            <div className="footer_links_parts">
              <div className="footer_links_parts_heading">
                <h3>Data Analysis & Visualization Tools</h3>
              </div>
              <div className="footer_links_parts_multiple_link">
                <ul>
                  <Link to="">
                    <li>Anaconda</li>
                  </Link>
                  <Link to="">
                    <li>Jupyter Notebook</li>
                  </Link>
                  <Link to="">
                    <li>Tableau</li>
                  </Link>
                  <Link to="">
                    <li>Power BI</li>
                  </Link>
                  <Link to="">
                    <li>Apache Spark</li>
                  </Link>
                </ul>
              </div>
            </div>

            <div className="footer_links_parts">
              <div className="footer_links_parts_heading">
                <h3>ML & DL Frameworks</h3>
              </div>
              <div className="footer_links_parts_multiple_link">
                <ul>
                  <Link to="">
                    <li>scikit-learn</li>
                  </Link>
                  <Link to="">
                    <li>PyTorch</li>
                  </Link>
                  <Link to="">
                    <li>Keras</li>
                  </Link>
                  <Link to="">
                    <li>TensorFlow</li>
                  </Link>
                </ul>
              </div>
            </div>

            <div className="footer_links_parts">
              <div className="footer_links_parts_heading">
                <h3>Cyber-security Tools</h3>
              </div>
              <div className="footer_links_parts_multiple_link">
                <ul>
                  <Link to="">
                    <li>Aircrack-ng</li>
                  </Link>
                  <Link to="">
                    <li>Sprinto</li>
                  </Link>
                  <Link to="">
                    <li>CrowdStrike Falcon</li>
                  </Link>
                  <Link to="">
                    <li>Darktrace</li>
                  </Link>
                  <Link to="">
                    <li>Parrot</li>
                  </Link>
                </ul>
              </div>
            </div>

            <div className="footer_links_parts">
              <div className="footer_links_parts_heading">
                <h3>Networking Tools</h3>
              </div>
              <div className="footer_links_parts_multiple_link">
                <ul>
                  <Link to="">
                    <li>Wireshark</li>
                  </Link>
                  <Link to="">
                    <li>Nmap</li>
                  </Link>
                  <Link to="">
                    <li>Nagios</li>
                  </Link>
                  <Link to="">
                    <li>NPM</li>
                  </Link>
                  <Link to="">
                    <li>Cisco Packet Tracer</li>
                  </Link>
                  <Link to="">
                    <li>OpenVPN</li>
                  </Link>
                </ul>
              </div>
            </div>

            <div className="footer_links_parts">
              <div className="footer_links_parts_heading">
                <h3>DevOps Tools</h3>
              </div>
              <div className="footer_links_parts_multiple_link">
                <ul>
                  <Link to="">
                    <li>Docker</li>
                  </Link>
                  <Link to="">
                    <li>Kubernetes</li>
                  </Link>
                  <Link to="">
                    <li>Jenkins</li>
                  </Link>
                  <Link to="">
                    <li>Ansible</li>
                  </Link>
                  <Link to="">
                    <li>Puppet</li>
                  </Link>
                  <Link to="">
                    <li>Chef</li>
                  </Link>
                </ul>
              </div>
            </div>

            <div className="footer_links_parts">
              <div className="footer_links_parts_heading">
                <h3>Cloud Services</h3>
              </div>
              <div className="footer_links_parts_multiple_link">
                <ul>
                  <Link to="">
                    <li>AWS</li>
                  </Link>
                  <Link to="">
                    <li>Google Cloud</li>
                  </Link>
                  <Link to="">
                    <li>Microsoft Azure</li>
                  </Link>
                  <Link to="">
                    <li>IBM Cloud</li>
                  </Link>
                  <Link to="">
                    <li>Oracle Cloud</li>
                  </Link>
                  <Link to="">
                    <li>Alibaba Cloud</li>
                  </Link>
                </ul>
              </div>
            </div>

            <div className="footer_links_parts">
              <div className="footer_links_parts_heading">
                <h3>Containerization</h3>
              </div>
              <div className="footer_links_parts_multiple_link">
                <ul>
                  <Link to="">
                    <li>Docker</li>
                  </Link>
                  <Link to="">
                    <li>Podman</li>
                  </Link>
                  <Link to="">
                    <li>LXC</li>
                  </Link>
                  <Link to="">
                    <li>CRI-O</li>
                  </Link>
                  <Link to="">
                    <li>containerd</li>
                  </Link>
                </ul>
              </div>
            </div>

            <div className="footer_links_parts">
              <div className="footer_links_parts_heading">
                <h3>Testing Tools</h3>
              </div>
              <div className="footer_links_parts_multiple_link">
                <ul>
                  <Link to="">
                    <li>Selenium</li>
                  </Link>
                  <Link to="">
                    <li>JUnit</li>
                  </Link>
                  <Link to="">
                    <li>TestNG</li>
                  </Link>
                  <Link to="">
                    <li>Cucumber</li>
                  </Link>
                  <Link to="">
                    <li>Postman</li>
                  </Link>
                  <Link to="">
                    <li>JMeter</li>
                  </Link>
                  <Link to="">
                    <li>SoapUI</li>
                  </Link>
                </ul>
              </div>
            </div>

            <div className="footer_links_parts">
              <div className="footer_links_parts_heading">
                <h3>Project Management Tools</h3>
              </div>
              <div className="footer_links_parts_multiple_link">
                <ul>
                  <Link to="">
                    <li>Jira</li>
                  </Link>
                  <Link to="">
                    <li>Trello</li>
                  </Link>
                  <Link to="">
                    <li>Asana</li>
                  </Link>
                  <Link to="">
                    <li>Monday.com</li>
                  </Link>
                  <Link to="">
                    <li>ClickUp</li>
                  </Link>
                  <Link to="">
                    <li>Microsoft Project</li>
                  </Link>
                  <Link to="">
                    <li>Wrike</li>
                  </Link>
                </ul>
              </div>
            </div>

            <div className="footer_links_parts">
              <div className="footer_links_parts_heading">
                <h3>CI/CD Tools</h3>
              </div>
              <div className="footer_links_parts_multiple_link">
                <ul>
                  <Link to="">
                    <li>Jenkins</li>
                  </Link>
                  <Link to="">
                    <li>Travis CI</li>
                  </Link>
                  <Link to="">
                    <li>CircleCI</li>
                  </Link>
                  <Link to="">
                    <li>GitLab CI/CD</li>
                  </Link>
                  <Link to="">
                    <li>Bamboo</li>
                  </Link>
                  <Link to="">
                    <li>TeamCity</li>
                  </Link>
                </ul>
              </div>
            </div>

            <div className="footer_links_parts">
              <div className="footer_links_parts_heading">
                <h3>Collaboration Tools</h3>
              </div>
              <div className="footer_links_parts_multiple_link">
                <ul>
                  <Link to="">
                    <li>Slack</li>
                  </Link>
                  <Link to="">
                    <li>Microsoft Teams</li>
                  </Link>
                  <Link to="">
                    <li>Zoom</li>
                  </Link>
                  <Link to="">
                    <li>Google Meet</li>
                  </Link>
                  <Link to="">
                    <li>Skype</li>
                  </Link>
                  <Link to="">
                    <li>Discord</li>
                  </Link>
                </ul>
              </div>
            </div>

            <div className="footer_links_parts">
              <div className="footer_links_parts_heading">
                <h3>API Management Tools</h3>
              </div>
              <div className="footer_links_parts_multiple_link">
                <ul>
                  <Link to="">
                    <li>Postman</li>
                  </Link>
                  <Link to="">
                    <li>Swagger</li>
                  </Link>
                  <Link to="">
                    <li>Apigee</li>
                  </Link>
                  <Link to="">
                    <li>Kong</li>
                  </Link>
                  <Link to="">
                    <li>MuleSoft</li>
                  </Link>
                </ul>
              </div>
            </div>

            <div className="footer_links_parts">
              <div className="footer_links_parts_heading">
                <h3>Version Control Hosting</h3>
              </div>
              <div className="footer_links_parts_multiple_link">
                <ul>
                  <Link to="">
                    <li>GitHub</li>
                  </Link>
                  <Link to="">
                    <li>GitLab</li>
                  </Link>
                  <Link to="">
                    <li>Bitbucket</li>
                  </Link>
                  <Link to="">
                    <li>SourceForge</li>
                  </Link>
                  <Link to="">
                    <li>Launchpad</li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <span id="copyinsideright">
            © {new Date().getFullYear()} · <span>InstallerArmory</span> · All
            rights reserved
          </span>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
