/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/vasern.svg',
    infoLink: 'https://vasern.com',
    pinned: true,
  },
];

const siteConfig = {
  title: 'Vasern', // Title for your website.
  tagline: 'Fast and open source database for React Native',
  url: 'https://vasern.com', // Your website URL
  baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'vasern',
  organizationName: 'ambistudio',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { doc: 'overview', label: 'Docs'},
    { doc: 'todo-example', label: "Examples" },
    { href: "https://github.com/ambistudio/vasern", label: "Github" }
    // {doc: 'doc4', label: 'API'},
    // {page: 'help', label: 'Help'},
    // {blog: true, label: 'Blog'},
  ],

  // If you have users set above, you add it here:
  // users,

  /* path to images for header/footer */
  headerIcon: 'img/vasern.svg',
  footerIcon: 'img/vasern.svg',
  favicon: 'img/favicon.png',
  usePrism: ['jsx'],

  /* Colors for website */
  colors: {
    primaryColor: '#1E1E1E',
    secondaryColor: '#1976d2',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Ambi Studio`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'solarized-dark',
  },

  // Add custom scripts here that would be placed in <script> tags.
  // scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/vasern-og-banner.png',
  twitterImage: 'img/vasern-twitter-banner.png',

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
  gaTrackingId: "UA-127606864-1",

  // Media article about the project
  mediaItems: [{
    title: "New React Native tool coming your way — Vasern joins the party",
    description: "The best tools are built by users who are determined to improve their workflow! The story behind the creation of Vasern, a brand new data storage for React Native.",
    link: "https://jaxenter.com/new-react-native-tool-vasern-150729.html",
    author: "Eirini-Eleni - Jaxenter"
  }, {
    title: "I built Vasern — a data storage for React Native",
    description: "An open source sync database solution. The goals of Vasern focus on performance, friendly to developers and make it available for everyone.",
    link: "https://medium.com/@hieunc229/i-built-vasern-a-data-storage-for-react-native-39f904369550",
    author: "Hieu Nguyen - Medium"
  }]
};

module.exports = siteConfig;
