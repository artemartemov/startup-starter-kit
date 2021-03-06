const sanityManifest = require('../backend/sanity')
const {dataset, projectId} = sanityManifest.api

module.exports = {
  siteMetadata: {
    title: "MyStartup",
    theme: {
      background: "#FFFFFF",
      color: "#182E3F",
      accent: "#378386"
    }
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#378386",
        theme_color: "#378386",
        display: "minimal-ui",
        icon: "src/images/gatsby-icon.png" // This path is relative to the root of the site.
      }
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain remote schema Query type
        typeName: "SANITY",
        // This is the field under which it's accessible
        fieldName: "sanity",
        refetchInterval: 15,
        // URL to query from; should be put in env?
        url: `https://${projectId}.api.sanity.io/v1/graphql/${dataset}/default`
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ]
}
