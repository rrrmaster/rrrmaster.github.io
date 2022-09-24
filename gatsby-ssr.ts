// Adds a class name to the body element
exports.onRenderBody = (
  { setBodyAttributes, setHtmlAttributes },
  pluginOptions
) => {
  setHtmlAttributes({ lang: "ko" });

  setBodyAttributes({
    className: "my-body-class",
  });
};
