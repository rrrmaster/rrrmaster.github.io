const siteConfig = require(`./config.js`);
const tailwindcss = require(`tailwindcss`);
const remarkMath = require(`remark-math`)
const rehypeKatex = require("rehype-katex")


module.exports = {
  siteMetadata: {
    url: siteConfig.url,
    title: siteConfig.title,
    author: siteConfig.author,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1024,
              quality: 60,
              sizeByPixelDensity: true,
            },
          },
        ],
        remarkPlugins: [require('remark-math')],
        rehypePlugins: [require('rehype-katex')],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `고수처럼 개발 연구소`,
        short_name: `고수처럼 블로그`,
        description: `The application does cool things and makes your life better.`,
        lang: `ko`,
        display: `standalone`,
        icon: `src/images/icon.png`,
        start_url: `/`,
        background_color: `#17C3FF`,
        theme_color: `#fff`,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          tailwindcss("./tailwind.config.js"),
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/index.js`
      }
    },
    'gatsby-plugin-netlify',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
  ],
};
