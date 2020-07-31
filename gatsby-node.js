/* eslint-disable no-undef */
exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allFeaturedEtsyListing {
        nodes {
          listing_id
        }
      }
    }
  `)

  data.allFeaturedEtsyListing.nodes.forEach(node => {
    const slug = `shop/${node.listing_id}`
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/components/shop.js`),
      context: { listing: node.listing_id },
    })
  })
}
