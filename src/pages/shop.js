/* eslint-disable global-require */
/* eslint-disable no-undef */
import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export const query = graphql`
  query getListing($listing: Int) {
    listing: featuredEtsyListing(listing_id: { eq: $listing }) {
      description
      price
      url
      title
    }
    images: allEtsyListingImage(filter: { listing_id: { eq: $listing } }) {
      nodes {
        url_fullxfull
        listing_id
      }
    }
  }
`

const Jewelry = ({ data }) => {
  const { listing, images } = data
  return (
    <Layout>
      <p>{listing.title}</p>
      <img src={images.nodes[0].url_fullxfull} />
      <p>{listing.description}</p>
    </Layout>
  )
}

Jewelry.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Jewelry
