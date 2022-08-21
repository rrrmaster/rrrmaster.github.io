import dayjs from "dayjs";
import { graphql } from "gatsby";
import React from "react";
import { Layout } from "../components/Layout";
import { SEO } from "../components/SEO";
import Utterances from "../components/Utterances";

const PostTemplate: React.FC = ({ data }: any) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const date = dayjs(frontmatter.date, "YYYY-MM-DD");
  return (
    <Layout title={frontmatter.title}>
      <div className="my-3">
        <h1 className="post-title">{frontmatter.title}</h1>
        <span className="color-fg-subtle">
          작성일 : {date.format("YYYY년 MM월 DD일")}
        </span>
      </div>
      <div className="markdown-body">
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
      <Utterances />
    </Layout>
  );
};
export const Head = ({ location, params, data, pageContext }: any) => {
  const { title, tags } = data.markdownRemark.frontmatter;
  return <SEO title={title} tags={tags} />;
};

export const query = graphql`
  query PostTemplate($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date
        tags
      }
    }
  }
`;

export default PostTemplate;
