import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

import "katex/dist/katex.min.css"
const PageTemplate = ({ data, pageContext }) => {
	return (
		<Layout title={"강좌" + data.mdx.fields.name}>
            <MDXProvider>
			    <MDXRenderer>{data.mdx.body}</MDXRenderer>
            </MDXProvider>
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