/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const proxy= require('http-proxy-middleware');

require("dotenv").config({})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Prettyish Jewelry`,
    description: `Power pieces for humans braving life with a wild heart.`,
    author: `Jacks & Stichart`,
  },
  developMiddleware: app => {
    app.use(
      "/.netlify/functions/",
      proxy({
        target: "http://localhost:9000",
        pathRewrite: {
          "/.netlify/functions/": "",
        },
      })
    )
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#f7b500`,
        theme_color: `#f7b500`,
        display: `minimal-ui`,
        icon: `src/images/jacksmedia.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-google-sheets',
      options: {
        spreadsheetId: '1kMsPdVwJxPHMXMW5lUbtEJqofHYpLFxErg6TQ3MN10w',
        worksheetTitle: '88names',
        credentials: require('./cl13nt_secret.json')
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
