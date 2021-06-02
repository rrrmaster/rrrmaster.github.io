const siteConfig = require(`./config.js`);

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
			}
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `The Cool Application`,
				short_name: `Cool App`,
				description: `The application does cool things and makes your life better.`,
				lang: `ko`,
				display: `standalone`,
				icon: `src/images/icon.png`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#fff`,
			},
		},
		{
			resolve: `gatsby-plugin-sass`,
			options: {
				postCssPlugins: [
					require("tailwindcss"),
					require("./tailwind.config.js"), // Optional: Load custom Tailwind CSS configuration
				],
			},
		},

		`gatsby-plugin-sitemap`,
		`gatsby-plugin-react-helmet`,
	],
};
