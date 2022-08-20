import React from "react";
import Header from "./Header";
import { SEO } from "./SEO";

interface Props {
  title?: string;
  description?: string;
  children: JSX.Element | JSX.Element[];
}

export const Layout = ({ title, description, children }: Props) => {
  return (
    <>
      <div>
        <Header />
        <main className="box-container pt-3 ">{children}</main>
      </div>
    </>
  );
};
