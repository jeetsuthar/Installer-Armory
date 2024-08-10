// @ts-check

import { themes as prismThemes } from "prism-react-renderer";

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
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
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
      id: 'announcementBar',
      content:
        'Website Under Development!',
      backgroundColor: '#a799e2',
      textColor: '#000',
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
            { label: "Programming Languages", to: "docs/category/programming-" },
            { label: "IDEs and Code Editors", to: "docs/category/code_editors" },
            { label: "Version Control Systems", to: "docs/intro" },
            { label: "Web Development Frameworks", to: "docs/intro" },
            { label: "Database Management Systems", to: "docs/intro" },
            { label: "Containerization and Virtualization", to: "docs/intro" },
            { label: "Cloud Platforms and Tools", to: "docs/intro" },
            {
              label: "Data Analysis and Visualization Tools",
              to: "docs/intro",
            },
            {
              label: "Machine Learning and Deep Learning Frameworks",
              to: "docs/intro",
            },
            { label: "Mobile App Development", to: "docs/intro" },
            { label: "DevOps Tools", to: "docs/intro" },
            { label: "Security Tools", to: "docs/intro" },
          ],
        },
        { to: "/blog", label: "About", position: "left" },
        { to: "/blog", label: "Request", position: "right" },
        {
          href: "https://github.com/jeetsuthar/Installify",
          label: "GitHub",
          position: "right",
        },
        {
          type: "search",
          position: "left",
        },
      ],
    },

    footer: {
      style: "dark",
      links: [
        {
          title: "Company",
          items: [
            { label: "About Us", to: "/docs/intro" },
            { label: "Legal", to: "/docs/intro" },
            { label: "Careers", to: "/docs/intro" },
            { label: "Contact Us", to: "/docs/intro" },
            { label: "Privacy Policy", to: "/docs/intro" },
            { label: "Terms of Services", to: "/docs/intro" },
          ],
        },
        {
          title: "Languages",
          items: [
            { label: "Python", to: "/docs/intro" },
            { label: "Java", to: "/docs/intro" },
            { label: "C++", to: "/docs/intro" },
            { label: "PHP", to: "/docs/intro" },
            { label: "JavaScript", to: "/docs/intro" },
            { label: "Android Languages", to: "/docs/intro" },
          ],
        },
        // Add more sections if needed
      ],

      copyright: `Copyright © ${new Date().getFullYear()} InstallerArmory. All Right Reserved`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
