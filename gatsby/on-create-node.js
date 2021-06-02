'use strict';

const _ = require('lodash');
const { createFilePath } = require('gatsby-source-filesystem');
const onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions;

	if (node.internal.type === 'Mdx') {
		if (typeof node.frontmatter.slug !== 'undefined') {
			const dirname = getNode(node.parent).relativeDirectory;
			createNodeField({
				node,
				name: 'slug',
				value: `/${node.frontmatter.slug}`
			});
			createNodeField({
				node,
				name: 'name',
				value: node.frontmatter.name
			});
		}
		else {
			const value = createFilePath({ node, getNode });
			createNodeField({
				node,
				name: 'slug',
				value
			});
			createNodeField({
				node,
				name: 'name',
				value: node.frontmatter.name
			});
		}
	}
}

module.exports = onCreateNode;