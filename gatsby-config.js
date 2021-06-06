const siteConfig = require(`./config.js`);
const tailwindcss = require(`tailwindcss`);

module.exports = {
    siteMetadata: {
        url: siteConfig.url,
        title: siteConfig.title,
        author: siteConfig.author
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/content/posts/`,
            },
        },
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                extensions: [`.mdx`, `.md`],
                remarkPlugins: [require("remark-math"), require("remark-html-katex")],
            }
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
                    tailwindcss('./tailwind.config.js'),
                    require("autoprefixer"),
                ],
            },
        },
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-react-helmet`,
    ],
};
