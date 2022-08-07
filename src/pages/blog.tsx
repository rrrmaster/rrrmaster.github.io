import React from "react";
import { graphql, Link } from "gatsby";
import Header from "../components/Header";
import dayjs from "dayjs";

export default function Template({ data }: any) {
  const { allMarkdownRemark } = data; // data.markdownRemark holds your post data
  const { edges } = allMarkdownRemark;
  console.log(edges);
  return (
    <div>
      <Header />
      <main className="box-container mt-3 mx-auto">
        <div className="my-3">
          {edges.map((element: any) => (
            <div className="pt-4 border-bottom d-flex flex-justify-between">
              <div>
                <p className="f3 lh-condensed mb-0 mt-1 Link--primary">
                  <Link to={element.node.frontmatter.slug}>
                    {element.node.frontmatter.title}
                  </Link>
                </p>
                <p> {element.node.frontmatter.description}</p>
                <p> {element.node.frontmatter.date}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            date
            slug
            title
            description
          }
        }
      }
    }
  }
`;
