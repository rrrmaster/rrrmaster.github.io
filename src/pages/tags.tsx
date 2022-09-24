import { graphql } from "gatsby";
import * as React from "react";
import { Layout } from "../components/Layout";
import { SEO } from "../components/SEO";

const TagPage = ({ data }: any) => {
  var tags: String[] = [];

  data.allMarkdownRemark.nodes
    .map((e: any) => e.frontmatter.tags)
    .forEach((element: any) => {
      tags = tags.concat(element);
    });
  var query = [...new Set(tags)];
  return (
    <Layout>
      <div className="blankslate">
        <ul className="list-style-none">
          {query.map((e, index) => (
            <li className="d-inline-block px-1" key={index}>
              <p className="Label">{e}</p>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export const Head = ({ location, params, data, pageContext }: any) => (
  <SEO title="태그" description="태그 모음 페이지입니다." />
);

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      nodes {
        frontmatter {
          tags
        }
      }
    }
  }
`;

export default TagPage;
