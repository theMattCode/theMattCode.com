module.exports = {
  siteMetadata: {
    title:
      'Matthäus Mayer - Full-stack Developer & Freelancer - Portfolio & Blog - theMattCode.com',
    siteUrl: 'https://theMattCode.com'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'theMattCode - Portfolio and Blog',
        short_name: 'theMattCode.com',
        start_url: '/',
        icon: 'src/images/icon.png'
      }
    }
  ]
};
