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
        <main className="box-container mt-3 mx-auto">{children}</main>
      </div>
    </>
  );
};
