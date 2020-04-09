/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'This is fucking awesome.',
    author: 'Alex Kiefer'
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-netlify-cms',
    `gatsby-plugin-sharp`,
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/_posts/blog/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `news`,
        path: `${__dirname}/_posts/news/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1920,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Fjalla One`,
            variants: [`400`]
          },
          {
            family: 'Source Sans Pro',
            variants: ['400']
          }
        ],
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `redfoxesunited`,
      },
    }
  ]
}
