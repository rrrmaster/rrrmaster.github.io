
'use strict';

const path = require('path');
const siteConfig = require('../../config.js');

module.exports = async (graphql, actions) => {
	const { createPage } = actions;
	const result = await graphql(`
	query PostQuery {
		allMdx {
		  totalCount
		}
	  }
	  
  	`);

	const postsPerPage= 1;
	const numPages = Math.ceil(result.data.allMdx.totalCount / postsPerPage);

	for (let i = 0; i < numPages; i += 1) {
		createPage({
			path: i === 0 ? '/blog' : `/blog/${i}`,
			component: path.resolve('./src/templates/list-template.js'),
			context: {
				currentPage: i,
				postsLimit: postsPerPage,
				postsOffset: i * postsPerPage,
				prevPagePath: i <= 1 ? '/blog' : `/blog/${i - 1}`,
				nextPagePath: `/blog/${i + 1}`,
				hasPrevPage: i !== 0,
				hasNextPage: i !== numPages - 1
			}
		});

	}
}