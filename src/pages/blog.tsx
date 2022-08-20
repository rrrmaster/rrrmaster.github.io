import React from "react";
import { graphql, Link } from "gatsby";
import Header from "../components/Header";
import { Layout } from "../components/Layout";
import { SEO } from "../components/SEO";

export default function Template({ data }: any) {
  const { allMarkdownRemark } = data; // data.markdownRemark holds your post data
  const { edges } = allMarkdownRemark;

  return (
    <Layout title="작성 글" description="">
      <div className="my-3">
        {edges.map((element: any, index: number) => (
          <div key={index} className="pt-4 border-bottom d-flex flex-justify-between">
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
    </Layout>
  );
}

export const Head = ({ location, params, data, pageContext }: any) => (
  <SEO title="작성한 글" description="작성된 글 목록을 볼 수 있습니다." />
);

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
