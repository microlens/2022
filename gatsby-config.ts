import type { GatsbyConfig, PluginRef } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    siteTitle: `2022`,
    siteTitleAlt: `2022 | The Zodiac`,
    siteHeadline: `2022 | The Zodiac`,
    siteUrl: `https://microlens.github.io/2022/`,
    siteDescription: "Photos by Long Nhat Nguyen",
    siteImage: `/og-image.jpg`,
    author: `@torn4dom4n`,
  },
  trailingSlash: `never`,
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-emilia`,
      options: {
        name: `2022`,
        socialMedia: [{}],
        showThemeAuthor: false,
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
        name: `2022 | The Zodiac`,
        short_name: `2022`,
        description: `Photos by Long Nhat Nguyen`,
        start_url: `/`,
        background_color: `#fff`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-384x384.png`,
            sizes: `384x384`,
            type: `image/png`,
          },
        ],
      },
    },
  ].filter(Boolean) as Array<PluginRef>,
}

export default config
