/* eslint-disable global-require */
/* eslint-disable no-undef */
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "./layout"

const Jewelry = () => {
  const query = useStaticQuery(graphql`
    query getListing($listing: Int) {
      featuredEtsyListing(listing_id: { eq: $listing }) {
        description
        price
        url
        title
      }
      etsyListingImage(listing_id: { eq: $listing }) {
        id
        url_fullxfull
      }
    }
  `)

  console.log(query.featuredEtsyListing)

  return (
    <Layout>
      <p>Jewelry!</p>
    </Layout>
  )
}

Jewelry.propTypes = {}

export default Jewelry
