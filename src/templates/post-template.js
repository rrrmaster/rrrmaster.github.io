import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import { MDXRenderer } from "gatsby-plugin-mdx"

const PageTemplate = ({ data, pageContext }) => {
	return (
		<Layout title={data.mdx.fields.name}>
			<MDXRenderer>{data.mdx.body}</MDXRenderer>
		</Layout>
	)
}
export const query = graphql`
	query PostBySlug($slug: String!) {
		mdx(fields: { slug: { eq: $slug } }) {
			id
			body
			fields {
				name
				slug
			}
			
		}
	}
`;

export default PageTemplate;