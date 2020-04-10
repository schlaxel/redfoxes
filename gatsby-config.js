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
    },
    {
      resolve: `gatsby-plugin-modal-routing`,
      options: {
        modalProps: {
          style: {
            overlay: {
              position: `fixed`,
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: `rgba(0, 0, 0, 0.75)`,
            },
            content: {
              position: `absolute`,
              border: `none`,
              background: `none`,
              padding: 0,
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
              overflow: `auto`,
              WebkitOverflowScrolling: `touch`,
            },
          },
          contentLabel: `Modal`
        }
      }
    },
    {
      resolve: "gatsby-source-custom-api",
      options: {
          url: "https://www.openligadb.de/api/getnextmatchbyleagueteam/4362/112",
          rootKey: 'nextGame'
      }
    },
    {
      resolve: "gatsby-source-custom-api",
      options: {
          url: "https://www.openligadb.de/api/getbltable/bl1/2019",
          rootKey: 'tabelle'
      }
    }
  ]
}
