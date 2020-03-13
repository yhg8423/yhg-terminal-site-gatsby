// gatsby-node.js
const path = require("path");

exports.createPages = ({ boundActionCreators, graphql }) => {
    const { createPage } = boundActionCreators;

    const blogPostTemplate = path.resolve(`src/templates/blogTemplate.js`);
  
    return graphql(`
      {
        allMarkdownRemark(filter: {frontmatter: {category: {eq: "blog"}}}, limit: 1000) {
          edges {
            node {
              html
              id
              frontmatter {
                date
                path
                title
                subtitle
                tags
                category
              }
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        console.log(result)
        console.error(result.errors);
        return Promise.reject(result.errors);
      }
  
      const posts = result.data.allMarkdownRemark.edges;
  
      posts.forEach(({ node }) => {
        createPage({
          path: node.frontmatter.path,
          component: blogPostTemplate,
          context: {}
        });
      });
    });
};
