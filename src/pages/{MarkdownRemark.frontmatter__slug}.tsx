import React from "react";
import { graphql } from "gatsby";
import Header from "../components/Header";
import dayjs from "dayjs";
import Utterances from "../components/Utterances";

export default function Template({ data }: any) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  const date = dayjs(frontmatter.date, "YYYY-MM-DD");
  return (
    <div>
      <Header />
      <main className="box-container mt-3 mx-auto">
        <div className="my-3">
          <h1>{frontmatter.title}</h1>
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
      </main>
    </div>
  );
}
export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`;
