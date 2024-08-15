// @ts-check

import { themes as prismThemes } from "prism-react-renderer";
import { Icon } from "semantic-ui-react";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "InstallerArmory",
  tagline: "Your ultimate guide to effortless installations!",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://192.168.0.6:3000",
  baseUrl: "/InstallerArmory/",

  organizationName: "facebook", // Your GitHub org/user name
  projectName: "Installation", // Your repo name

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/jeetsuthar/InstallerArmory/tree/main/",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/jeetsuthar/InstallerArmory/tree/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["en"], // Add other languages if needed
      },
    ],
  ],

  stylesheets: [
    "src/css/navbar-custom.css",
    {
      href: "/css/custom.css",
      type: "text/css",
    },

    "https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css",
  ],
  scripts: [
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js",
      async: true,
    },
  ],

  themeConfig: {
    announcementBar: {
      id: "announcementBar",
      content:
        "Website under development—thanks for your patience as we build something great!",
      backgroundColor: "#FF4545",
      textColor: "#fff",
      isCloseable: true,
    },
    // image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "InstallerArmory",
      logo: {
        alt: "iA",
        src: "img/InstallerArmory.png",
      },
      items: [
        {
          type: "dropdown",
          label: "Docs",
          position: "left",
          items: [
            {
              label: "Programming Languages",
              to: "docs/category/programming-",
            },
            {
              label: "IDEs and Code Editors",
              to: "docs/category/code_editors",
            },
            { label: "Version Control Systems", to: "/" },
            { label: "Web Development Frameworks", to: "/" },
            { label: "Database Management Systems", to: "/" },
            { label: "Containerization and Virtualization", to: "/" },
            { label: "Cloud Platforms and Tools", to: "/" },
            {
              label: "Data Analysis and Visualization Tools",
              to: "/",
            },
            {
              label: "Machine Learning and Deep Learning Frameworks",
              to: "/",
            },
            { label: "Mobile App Development", to: "/" },
            { label: "DevOps Tools", to: "/" },
            { label: "Security Tools", to: "/" },
          ],
        },
        // { to: "/blog", label: "About", position: "left" },
        { to: "/request", label: "Request Form", position: "left" },
        {
          href: "https://github.com/jeetsuthar/InstallerArmory",
          label: "GitHub",
          Icon: "/static/img/github.png",
          position: "right",
        },
        {
          type: "search",
          position: "right",
        },
      ],
    },

    // footer: {
    //   style: "dark",
    // links: [
    //   {
    //     title: "Company",
    //     items: [
    //       { label: "About Us", to: "//" },
    //       { label: "Legal", to: "//" },
    //       { label: "Careers", to: "//" },
    //       { label: "Contact Us", to: "//" },
    //       { label: "Privacy Policy", to: "//" },
    //       { label: "Terms of Services", to: "//" },
    //     ],
    //   },
    //   {
    //     title: "Languages",
    //     items: [
    //       { label: "Python", to: "//" },
    //       { label: "Java", to: "//" },
    //       { label: "C++", to: "//" },
    //       { label: "PHP", to: "//" },
    //       { label: "JavaScript", to: "//" },
    //       { label: "Android Languages", to: "//" },
    //     ],
    //   },
    //   // Add more sections if needed
    // ],

    //   copyright: `Copyright © ${new Date().getFullYear()} InstallerArmory. All Right Reserved`,
    // },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
