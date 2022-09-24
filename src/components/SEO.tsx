import React from "react";
interface Props {
  title?: string;
  description?: string;
  tags?: string[];
  children?: JSX.Element | JSX.Element[];
}
export const SEO = ({ title, description, tags, children }: Props) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="google-site-verification"
        content="pfJ9bfzNh8_2M2YS7Zodeevi3iFu2F2bkyUIjwnR8bg"
      />
      <meta name="keywords" content={tags?.join(", ")} />

      <meta property="og:title" content="고수처럼 블로그" />
      <meta property="og:url" content="https://rrrmaster.github.io/" />
      <meta property="og:description" content="여러가지 개발을 좋아하는 20대 이상한 개발자"/>
      <meta property="og:image" content="https://rrrmaster.github.io/opengrpah.png" />
      {children}
    </>
  );
};
