import * as React from "react";
import { Layout } from "../components/Layout";
import { SEO } from "../components/SEO";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <div className="blankslate">
        <h3 className="blankslate-heading">아직 개발 중!</h3>
      </div>
    </Layout>
  );
};

export const Head = ({ location, params, data, pageContext }: any) => (
  <SEO title="홈" description="메인 페이지입니다." />
);

export default IndexPage;
