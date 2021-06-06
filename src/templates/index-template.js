import React from "react";
import Layout from "../components/Layout";

const IndexTemplate = ({ data, pageContext }) => {
  return (
    <Layout title="고수처럼 개발 연구소">
		<div className="flex justify-center flex-col items-center p-3">

			<p class="text-5xl font-light">Hello, I am <span className="font-bold">Gosu</span></p>
			<p class="text-5xl font-normal text-blue-600">I am a Software Developer</p>
		</div>
    </Layout>
  );
};
export default IndexTemplate;
