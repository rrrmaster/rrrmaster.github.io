import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import CategoryCard from "../components/CategoryCard";

const PageTemplate = ({ data, pageContext }) => {
  console.log(data);

  const list = [
    { name: "Algorithm", color: "#FC6E51" },
    { name: "Math", color: "#5D9CEC" },
    { name: "Unity", color: "#eee" },
    { name: "Gatsby", color: "#663399" },
  ]
  return (
    <Layout>
      <div class="container my-12 mx-auto px-4 md:px-12">
        <div class="flex flex-wrap -mx-1 lg:-mx-4">
          {list.map((e) => 
            <CategoryCard color={e.color} name={e.name}/>
          )}
        </div>
      </div>
    </Layout>
  );
};
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
