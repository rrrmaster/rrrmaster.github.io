import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

const NotFoundTemplate = ({ data, pageContext }) => {
	return (
		<Layout title="Not Found">
			<p>404 found</p>
		</Layout>
	)
}
export default NotFoundTemplate;	