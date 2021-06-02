import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import CategoryCard from '../components/CategoryCard';

const PageTemplate = ({ data, pageContext }) => {
	console.log(data)

	const list = [
		{name: 'Gatsby',color:'#663399'},
		
		{name: 'Gatsby',color:'#663399'},
		{name: 'Gatsby',color:'#663399'},
		{name: 'Gatsby',color:'#663399'},
		{name: 'Gatsby',color:'#663399'}
		
		


	]
	const item = ({ slug, name }) => {

		return (
			<li>
				<Link to={slug}>{name}
				</Link>
			
			</li>
		)
	}
	//{data.allMdx.edges.map((e) => item(e.node.fields))}
	//<CategoryCard data={list}/>
	return (
		<Layout>
			<CategoryCard data={list}/>
		</Layout>
	)
}
export const query = graphql`
	query List {
		allMdx {
			edges {
				node {
					fields {
						slug
						name
					}
				}
			}
		}
	}

`;

export default PageTemplate;