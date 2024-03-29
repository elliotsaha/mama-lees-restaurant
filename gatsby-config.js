module.exports = {
  siteMetadata: {
    title: `Mama Lee's Kitchen`,
    description: `Here at Mama Lee's Kitchen, in Edmonton we are passionate about making food that has substance to it, try our delicious soup. We don't skimp on anything and ...`,
    author: `@herilsaha`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-netlify-cms`,
    "gatsby-plugin-netlify-identity-widget",
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `featured`,
        path: `${__dirname}/content/Featured`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `bento`,
        path: `${__dirname}/content/Bento`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sideDish`,
        path: `${__dirname}/content/sideDish`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `chickenspecialties`,
        path: `${__dirname}/content/ChickenSpecialties`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `soup`,
        path: `${__dirname}/content/Soup`,
      },
    },


    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `rice`,
        path: `${__dirname}/content/Rice`,
      },
    },

    {
      resolve: "gatsby-background-image",
      options: {
        // add your own characters to escape, replacing the default ':/'
        specialChars: "/:",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 780,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mama Lee's Kitchen`,
        short_name: `Mama Lee's Kitchen`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
