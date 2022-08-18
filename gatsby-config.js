module.exports = {
  pathPrefix: "/2022",
  siteMetadata: {
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/master/themes/gatsby-theme-emilia-core/gatsby-config.js
    siteTitle: `2022`,
    siteTitleAlt: `2022 | 📷 by Long Nhat Nguyen`,
    siteHeadline: `2022 | 📷 by Long Nhat Nguyen`,
    siteUrl: `https://retro90s.github.io/2022/`,
    siteDescription: "Photos by Long Nhat Nguyen",
    siteLanguage: `en`,
    author: `@torn4dom4n`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-emilia`,
      options: {
        name: `2022`,
        socialMedia: [{}],
        location: `Vietnam`,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `2022 | 📷 by Long Nhat Nguyen`,
        short_name: `2022`,
        description: `Photos by Long Nhat Nguyen`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#3182ce`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
  ],
}