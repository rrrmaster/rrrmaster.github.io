const _ = require('lodash');
const path = require('path');
const createPostsPages = require('./pagination/create-posts-pages');

const createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;
	createPage({
		path: '/',
		component: path.resolve('./src/templates/index-template.js')
	});

	createPage({
		path: '/404',
		component: path.resolve('./src/templates/not-found-template.js')
	});

	const result = await graphql(`
		{
			allMdx {
				edges {
					node {
						id
						body
						frontmatter {
							title
							
						}
						fields{
							slug
						}
					}
				}
			}
		}
  	`);

	const { edges } = result.data.allMdx;
	edges.forEach(element => {
		const { slug } = element.node.fields;
		createPage({
			path: slug,
			component: path.resolve('./src/templates/post-template.js'),
			context: { slug }
		});
	})
	createPage({
        path: '/portfolio',
        component: path.resolve('./src/templates/portfolios-list-template.js'),
    });
	createPage({
        path: '/tag',
        component: path.resolve('./src/templates/tags-list-template.js'),
    });
	await createPostsPages(graphql, actions);
}
module.exports = createPages;