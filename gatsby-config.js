module.exports = {
  pathPrefix: "/2022",
  siteMetadata: {
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/master/themes/gatsby-theme-emilia-core/gatsby-config.js
    siteTitle: `2022`,
    siteTitleAlt: `2022 | 📷 by Long Nhat Nguyen`,
    siteHeadline: `2022 | 📷 by Long Nhat Nguyen`,
    siteUrl: `https://retro90s.github.io/2022/`,
    siteDescription: "📷 by Long Nhat Nguyen in 2022",
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
  ],
}
