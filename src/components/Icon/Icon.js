import React from "react";
import { a } from './Icon.module.scss'
const Icon = ({ name, icon }) => {
  return (
    <svg className={a} viewBox={icon.viewBox}>
      <title>{name}</title>
      <path d={icon.path} />
    </svg>
  );
};

export default Icon;
