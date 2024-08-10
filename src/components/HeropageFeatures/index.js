import React, { useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import Marquee from "react-fast-marquee";
import Aos from "aos";
import "aos/dist/aos.css";
import "./home.css";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
// import { Tooltip as ReactTooltip } from "react-tooltip";
const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  // Programming Language for infinite scroll ( name and logo )
  const Languages = [
    {
      language: "Python",
      logo: "https://cdn-icons-png.flaticon.com/128/5968/5968350.png",
      redirecting: "./docs/Programming/python/",
    },
    {
      language: "Java",
      logo: "https://cdn-icons-png.flaticon.com/128/919/919854.png",
      redirecting: "./docs/Programming/java/",
    },
    {
      language: "C",
      logo: "https://cdn-icons-png.flaticon.com/128/3665/3665923.png",
      redirecting: "./docs/Programming/C/",
    },
    {
      language: "C++",
      logo: "https://cdn-icons-png.flaticon.com/128/6132/6132222.png",
      redirecting: "./docs/Programming/CPlusPlus/",
    },
    {
      language: "JavaScript",
      logo: "https://cdn-icons-png.flaticon.com/128/5968/5968292.png",
      redirecting: "./docs/Programming/JavaScript/",
    },
    {
      language: "Ruby",
      logo: "https://cdn-icons-png.flaticon.com/128/919/919842.png",
      redirecting: "./docs/Programming/Ruby/",
    },
    {
      language: "PHP",
      logo: "https://cdn-icons-png.flaticon.com/128/5968/5968332.png",
      redirecting: "./docs/Programming/PHP/",
    },
    {
      language: "Swift",
      logo: "https://cdn-icons-png.flaticon.com/128/3670/3670396.png",
      redirecting: "./docs/Programming/Swift/",
    },
    {
      language: "Kotlin",
      logo: "https://download.logo.wine/logo/Kotlin_(programming_language)/Kotlin_(programming_language)-Logo.wine.png",
      redirecting: "./docs/Programming/Kotlin/",
    },
    {
      language: "R",
      logo: "https://cdn-icons-png.flaticon.com/128/2103/2103665.png",
      redirecting: "./docs/Programming/R/",
    },
    {
      language: "Go",
      logo: "https://go.dev/blog/go-brand/Go-Logo/PNG/Go-Logo_Blue.png",
    },
    {
      language: "Rust",
      logo: "https://cdn-icons-png.flaticon.com/128/5670/5670725.png",
    },
    {
      language: "TypeScript",
      logo: "https://cdn-icons-png.flaticon.com/128/5968/5968381.png",
      redirecting: "./docs/Programming/TypeScript/",
    },
    {
      language: "Node.js",
      logo: "https://cdn-icons-png.flaticon.com/128/919/919825.png",
    },
    {
      language: "React.js",
      logo: "https://cdn-icons-png.flaticon.com/128/10828/10828578.png",
    },
    {
      language: "Angular",
      logo: "https://cdn-icons-png.flaticon.com/128/16511/16511234.png",
    },
    {
      language: "Vue.js",
      logo: "https://cdn-icons-png.flaticon.com/128/15484/15484278.png",
    },
    {
      language: "Django",
      logo: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/django-logo-icon.png",
    },
    {
      language: "Laravel",
      logo: "https://mazer.dev/en/laravel/b1-course/laravel-framework-what-is/featured-laravel-logo_hu6ee09849caf06057f022172ece25199d_8776_0x480_resize_box_3.png",
    },
    {
      language: "ASP.NET",
      logo: "https://cdn.prod.website-files.com/6047a9e35e5dc54ac86ddd90/63064f1fedf422395124660e_e7d03466.png",
    },
  ];
  // Most popular tools for infinite scroll ( name and logo )
  const Software = [
    {
      name: "Visual Studio Code",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
    },
    {
      name: "PyCharm",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/PyCharm_Edu_Icon.svg/2048px-PyCharm_Edu_Icon.svg.png",
    },
    {
      name: "IntelliJ IDEA",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/IntelliJ_IDEA_Icon.svg/2048px-IntelliJ_IDEA_Icon.svg.png",
    },
    {
      name: "Eclipse",
      logo: "https://cdn.iconscout.com/icon/free/png-256/free-eclipse-14-282371.png",
    },
    {
      name: "NetBeans",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSArZvia5wKM5gaODI9WMad3MaM68d16NqAw&s",
    },
    {
      name: "Sublime Text",
      logo: "https://static-00.iconduck.com/assets.00/sublime-text-icon-2048x2048-cliibsen.png",
    },
    {
      name: "Atom",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXNSA7hneLbm9wkJvB7HOZTO0CUma70SlOJg&s",
    },
    {
      name: "Xcode",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0yRUh1zBJ2hnMjNc9FG-oxu-fgzfZanUo4w&s",
    },
    {
      name: "Android Studio",
      logo: "https://1.bp.blogspot.com/-LgTa-xDiknI/X4EflN56boI/AAAAAAAAPuk/24YyKnqiGkwRS9-_9suPKkfsAwO4wHYEgCLcBGAsYHQ/s0/image9.png",
    },
    {
      name: "RStudio",
      logo: "https://rstudio.com/wp-content/uploads/2018/10/RStudio-Logo-flat.png",
    },
    {
      name: "Git",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCEj_V6_aIHeHJk9LAEq1kk5Bs7bjAzb82qw&s",
    },
    {
      name: "GitHub Desktop",
      logo: "https://cdn-icons-png.flaticon.com/128/25/25231.png",
    },
    {
      name: "GitKraken",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT20yNbXDPVoRcthXbdMUsidQBeVY5ZnnCKZw&s",
    },
    {
      name: "Sourcetree",
      logo: "https://static-00.iconduck.com/assets.00/sourcetree-icon-407x512-cnpohnjl.png",
    },
    {
      name: "Docker",
      logo: "https://cdn-icons-png.flaticon.com/128/919/919853.png",
    },
    {
      name: "Kubernetes",
      logo: "https://static-00.iconduck.com/assets.00/kubernetes-icon-2048x1995-r1q3f8n7.png",
    },
    {
      name: "VirtualBox",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBWbUV7GA-STBEapSvNHmJtRmIYcelbodmXg&s",
    },
    {
      name: "Vagrant",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQedkNcePH_6fMqMxymEbL1hb-NoS_cxqhqw&s",
    },
    {
      name: "Anaconda",
      logo: "https://avatars.githubusercontent.com/u/497012?s=280&v=4",
    },
    {
      name: "Jupyter Notebook",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Jupyter_logo.svg/1767px-Jupyter_logo.svg.png",
    },
    {
      name: "Tableau",
      logo: "https://img.icons8.com/?size=512&id=9Kvi1p1F0tUo&format=png",
    },
    {
      name: "Power BI",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTGd1wOySFXHq1l9Juu4m6qGNxaiz865nYMA&s",
    },
    {
      name: "Apache Spark",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5w2DHbCXBDCxiB-LAvTol4HShmwjG0riH_w&s",
    },
    {
      name: "Flutter",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgp1jDyk2-tMtUnAjiJyUrd_jRDnaxXIWgvA&s",
    },
  ];

  return (
    <main>
      <section className="Intro_section">
        <div className="Intro_Outer_Div">
          <div className="Glass_Effect">
            <div className="Glass_Heading">
              <h1>Install Anything with Ease!</h1>
            </div>
            <div className="Glass_Description">
              <p>
                Hey<span>👋</span>, If you are Tired of struggling with complex
                installation processes? Installer-Armory simplifies it all.
                Whether you're a first-time user or need to troubleshoot an
                existing setup, find clear, step-by-step instructions for
                <span className="Typewriter">
                  <Typewriter
                    words={[
                      "Web Development !",
                      "Databases !",
                      "Programming Languages !",
                      "App Development !",
                      "DevOps !",
                      "Cyber security !",
                      "Version Control !",
                      "Code Editors/IDEs !",
                      "Design & Prototyping !",
                      "Package Managers !",
                      "Data Analysis !",
                      "Virtualization !",
                      "API Development !",
                      "Backend Frameworks !",
                    ]}
                    loop={13}
                    cursor
                    cursorStyle="|"
                    typeSpeed={30}
                    deleteSpeed={40}
                    delaySpeed={1000}
                  />
                </span>
              </p>
            </div>
            <div className="Glass_Button_Group">
              <div className="Glass_Button_1">
                <button
                  data-tooltip-id="tooltips"
                  data-tooltip-content="Let's Start Your First Installation"
                  data-tooltip-place="bottom"
                >
                  Get Start
                </button>
              </div>
              <div className="Glass_Button_2">
                <button
                  data-tooltip-id="tooltips"
                  data-tooltip-content="Send Request For Adding More Installation Guidance"
                  data-tooltip-place="bottom"
                >
                  Request
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="second_section">
        <div className="second_section_inner_div">
          <h1
            className="Marquee_content_Heading"
            data-aos="zoom-out"
            data-aos-duration="500"
          >
            Programming Languages
          </h1>

          <div
            className="Marquee"
            
          >
            <Marquee
              direction="left"
              pauseOnHover="true"
              autoFill="true"
              speed={120}
            >
              <div className="Tech_name">
                {Languages.map((item, index) => (
                  <div key={index} className="Individual_container">
                    <a href={item.redirecting}>
                      <img
                        src={item.logo}
                        alt={item.language}
                        className="all_logo"
                      />
                      <p>{item.language}</p>
                    </a>
                  </div>
                ))}
              </div>
            </Marquee>
          </div>
          

          <h1
            className="Marquee_content_Heading"
            data-aos="zoom-out"
            data-aos-duration="500"
          >
            Most Popular Tools
          </h1>
          <div
            className="Marquee"
            
          >
            <Marquee
              direction="right"
              pauseOnHover="true"
              autoFill="true"
              speed={120}
            >
              <div className="Tech_name">
                {Software.map((item, index) => (
                  <div key={index} className="Individual_container">
                    <img src={item.logo} alt={item.name} className="all_logo" />
                    <p>{item.name}</p>
                  </div>
                ))}
              </div>
            </Marquee>
          </div>
          <Tooltip id="tooltips" />
        </div>
      </section>

      <section className="Why-Choose-Us">
        <div className="why-choose-us-div">
          <div
            className="Section-Main-Heading"
            data-aos="zoom-out"
            data-aos-duration="500"
          >
            <h1>Why Choose Us ?</h1>
          </div>
          <div className="Outer-Div-Details">
            <div className="left-sided-box">
              <div
                className="left-inner-sided-box common_style "
                data-aos="zoom-out"
                data-aos-duration="500"
              >
                <h1>Comprehensive Guidance</h1>
                <p>
                  <ul>
                    <li>
                      {" "}
                      Save time and avoid common pitfalls with our easy,
                      step-by-step instructions.
                    </li>
                    <li>
                      {" "}
                      Guidance on installing 30+ of popular programming
                      languages, tools, and software.
                    </li>
                    <li>
                      {" "}
                      Benefit from clear instructions, with screenshots and
                      troubleshooting tips, for all skill levels.
                    </li>
                    <li>
                      {" "}
                      Join [processing...] users who trust our guides, rated 4.5
                      stars for their reliability.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
            <div className="right-sided-box">
              <div
                className="right-inner-sided-box common_style "
                data-aos="zoom-out"
                data-aos-duration="500"
              >
                <h1>Beginner-Friendly</h1>
                <p>
                  <ul>
                    <li>
                      Designed for all skill levels, from novices to seasoned
                      pros.
                    </li>
                    <li>
                      Start with the basics and progress at your own pace with
                      our intuitive guides.
                    </li>
                    <li>
                      Simple language, clear examples, and accessible resources
                      for every step.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
            <div className="left-sided-box">
              <div
                className="left-inner-sided-box common_style "
                data-aos="zoom-out"
                data-aos-duration="500"
              >
                <h1>Open Source</h1>
                <p>
                  <ul>
                    <li>
                      Access all our installation guides completely free of
                      charge—no hidden fees.
                    </li>
                    <li>
                      Our community-driven content is transparent, with
                      contributions from users worldwide.
                    </li>
                    <li>
                      Modify, share, and adapt our guides to fit your specific
                      needs without any restrictions.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
            <div className="right-sided-box">
              <div
                className="right-inner-sided-box common_style "
                data-aos="zoom-out"
                data-aos-duration="500"
              >
                <h1>Up-to-Date Information</h1>
                <p>
                  <ul>
                    <li>
                      Stay ahead with the latest installation instructions for
                      the newest versions.
                    </li>
                    <li>
                      We constantly update our guides to reflect the most
                      current software and tools.
                    </li>
                    <li>
                      Avoid outdated methods—our content is regularly reviewed
                      and refreshed.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
