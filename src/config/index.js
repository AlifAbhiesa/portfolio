module.exports = {
  siteTitle: 'Alif Abhiesa | Software Engineer',
  siteDescription:
    'Alif Abhiesa is a software engineer based in Bandung, ID specializing in building Back-End with php framework like CodeIgniter or Laravel.',
  siteKeywords:
    'Alif Abhiesa, Alif, Abhiesa, software engineer, back-end engineer, web developer, php',
  siteUrl: 'https://alif.engineer',
  siteLanguage: 'en_US',
  googleAnalyticsID: '',
  googleVerification: '',
  name: 'Alif Abhiesa',
  location: 'Bandung, ID',
  email: 'abhiesa24@gmail.com',
  github: 'https://github.com/AlifAbhiesa',
  twitterHandle: '#',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/AlifAbhiesa',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/alifabhiesa/',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/#',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/alif.abhiesa',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/#',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,
  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
