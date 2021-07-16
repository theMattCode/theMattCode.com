module.exports = {
  siteMetadata: {
    title: 'Matthäus Mayer - Full-stack Developer & Freelancer - Portfolio & Blog - theMattCode.com',
    siteUrl: 'https://theMattCode.com',
    name: 'Matthäus Mayer',
    role: 'Full-stack developer',
    location: 'Reutlingen, BW, Germany',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Fira Sans'],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'theMattCode.com',
        short_name: 'theMattCode.com',
        start_url: '/',
        icon: 'assets/img/icon.png',
      },
    },
  ],
};
