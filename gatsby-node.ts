import path from "path";

exports.onPostBuild = ({ reporter }: any) => {
  reporter.info(`Your Gatsby site has been built!`);
};

exports.createPages = async ({ graphql, actions }: any) => {
  const { createPage } = actions;
  const result = await graphql(`
    query MyQuery {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);

  const blogPostTemplate = path.resolve(`src/templates/PostTemplate.tsx`);

  result.data.allMarkdownRemark.edges.forEach((edge: any) => {
    const slug: string = edge.node.frontmatter.slug;
    createPage({
      path: `${slug}`,
      component: blogPostTemplate,
      context: { slug: slug, title: edge.node.frontmatter.title },
    });
  });
};
