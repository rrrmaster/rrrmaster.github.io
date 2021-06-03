import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import CategoryCard from '../components/CategoryCard';

const PageTemplate = ({ data, pageContext }) => {
    console.log(data)

    const list = [
        { name: 'Gatsby', color: '#663399' },

        { name: 'Gatsby', color: '#663399' },
        { name: 'Gatsby', color: '#663399' },
        { name: 'Gatsby', color: '#663399' },
        { name: 'Gatsby', color: '#663399' }




    ]
    const item = ({ slug, name }) => {

        return (
            <li>
                <CategoryCard/>
            </li>
        )
    }
    //{data.allMdx.edges.map((e) => item(e.node.fields))}
    //<CategoryCard data={list}/>
    return (
        <Layout>
            <div className="container mx-auto my-10">
                <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    {data.allMdx.edges.map((e) => item(e.node.fields))}
                </ul>
            </div>
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