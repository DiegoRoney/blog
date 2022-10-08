module.exports = {
  // Customize your site metadata:
  siteMetadata: {
    title: `Diego Blog`,
    author: `Diego R.`,
    description: `My site description...`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/js`,
      },
      {
        name: `github`,
        url: `https://github.com/del`,
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
  ],
}
