/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Red Foxes United - Freiburg',
    author: 'Red Foxes United',
    siteUrl: `https://www.rfu-freiburg.de`,
    description: 'SC Freiburg Fans seit Geburt. Fußball & Bier gemeinsam als RFU seit 2007. Wir unterstützen den Sportclub daheim und auswärts.'
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-netlify-cms',
    `gatsby-plugin-sharp`,
    'gatsby-transformer-sharp',
    `gatsby-plugin-react-helmet`,
    'gatsby-background-image',
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [`/admin`]
      }
    },
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/_site/content/`,
      },
    },
    {
    resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images/uploads`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms-paths`,
      options: {
        // Path to your Netlify CMS config file
        cmsConfig: `/static/admin/config.yml`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-plugin-netlify-cms-paths`,
          {
            resolve: `gatsby-remark-relative-images`,
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1000,
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
      resolve: `gatsby-source-instagram-all`,
      options: {
        access_token: "IGQVJVLUlEMG53TGlwdzE2am4yVmdyZA2dTMnNMb0p4RThCcXR0UEFmNXRRazJxZATJRb0JvMkFlMXBOYW1GX0FBMmRKOXAxeTh0RDBjNWpacHEtOEJyWHlYVWo5UDJDU0d3bTR4Y3ZAENjR3Wkx3ODNtZAgZDZD"
      }
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `redfoxesunited`,
        access_token: 'IGQVJVLUlEMG53TGlwdzE2am4yVmdyZA2dTMnNMb0p4RThCcXR0UEFmNXRRazJxZATJRb0JvMkFlMXBOYW1GX0FBMmRKOXAxeTh0RDBjNWpacHEtOEJyWHlYVWo5UDJDU0d3bTR4Y3ZAENjR3Wkx3ODNtZAgZDZD'
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
          contentLabel: `Modal`,
          shouldCloseOnOverlayClick: true
        },
      }
    },
    {
      resolve: "gatsby-source-custom-api",
      options: {
          url: "https://www.openligadb.de/api/getnextmatchbyleagueteam/4442/112",
          rootKey: 'nextGame'
      }
    },
    {
      resolve: "gatsby-source-custom-api",
      options: {
          url: "https://www.openligadb.de/api/getbltable/bl1/2020",
          rootKey: 'tabelle'
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Red Foxes United - Freiburg`,
        short_name: `Red Foxes United`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#951411`,
        display: `browser`,
        icon: `src/img/icon.png`
      },
    }
  ]
}
