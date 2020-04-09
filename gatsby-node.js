const path = require(`path`)

exports.onCreateNode =({ node, getNode, boundActionCreators }) => {
  // Create a new field to identify blog or news. Save as collection.
  if (node.internal.type === 'MarkdownRemark') {
      const { createNodeField } = boundActionCreators;
      node.collection = getNode(node.parent).sourceInstanceName;
  }
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blogTemplate.js`)
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {
          slug: node.frontmatter.path
      }, // additional data can be passed via context
    })
  })
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  // create Pages for instagram posts.
  const { createPage } = actions
  const instaTemplate = path.resolve(`src/templates/instaTemplate.js`)
  const result = await graphql(`
    {
      allInstaNode {
        edges {
          node {
            id
          }
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.allInstaNode.edges.forEach(({ node }) => {
    createPage({
      path: `/insta/${node.id}`,
      component: instaTemplate,
      context: {
          slug: node.id
      }, // additional data can be passed via context
    })
  })
}