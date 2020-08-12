module.exports = {
  siteMetadata: {
    title: `Jeffrey Ram Pineda`,
    description: `Jeffrey Ram Pineda's portfolio`,
    siteUrl: `https://github.com/jeffreyrampineda`,
    author: `@jeffreyrampineda`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-174342030-2",
      },
    },
  ],
}
