const metadata = require('./content/metadata');
module.exports = {
  siteMetadata: {
    title: `${metadata.name} - ${metadata.role} - Portfolio & Blog`,
    siteUrl: 'https://theMattCode.com',
    ...metadata,
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
