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
      {children}
    </>
  );
};
