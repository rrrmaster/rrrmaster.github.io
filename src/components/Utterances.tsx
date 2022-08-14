import React, { createRef, useLayoutEffect } from "react";

const src = "https://utteranc.es/client.js";

const Utterances: React.FC = React.memo(({}) => {
  const containerRef = createRef<HTMLDivElement>();

  useLayoutEffect(() => {
    const utterances = document.createElement("script");

    const attributes = {
      src: "https://utteranc.es/client.js",
      repo: "rrrmaster/rrrmaster.github.io",
      "issue-term": "pathname",
      label: "comment",
      theme: "github-light",
      crossOrigin: "anonymous",
      async: "true",
    };

    Object.entries(attributes).forEach(([key, value]) => {
      utterances.setAttribute(key, value);
    });

    containerRef.current?.appendChild(utterances);
  }, ["rrrmaster/rrrmaster.github.io"]);

  return <div ref={containerRef} />;
});

Utterances.displayName = "Utterances";

export default Utterances;
