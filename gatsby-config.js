module.exports = {
  siteMetadata: {
    title: 'Matthäus Mayer - Full-stack Developer & Freelancer - Portfolio & Blog - theMattCode.com',
    siteUrl: 'https://theMattCode.com',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sass',
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
