import React from "react";
interface Props {
  title?: string;
  description?: string;
  children?: JSX.Element | JSX.Element[];
}
export const SEO = ({ title, children }: Props) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content="Free Web tutorials" />
      {children}
    </>
  );
};
