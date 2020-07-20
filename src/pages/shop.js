/* eslint-disable global-require */
/* eslint-disable no-undef */
import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import EtsyButton from "../components/etsyButton"
import ExternalLink from "../components/ExternalLink"
const Entities = require("html-entities").AllHtmlEntities

const entities = new Entities()

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
  const details = listing.description.split("\n")
  const content = details.map(detail => {
    let detailItem
    if (detail.indexOf("https:") >= 0) {
      const detailPieces = detail.split(" ")
      detailItem = (
        <React.Fragment>
          <br />
          {detailPieces.map(detailPiece => {
            return detailPiece.indexOf("https:") === 0 ? (
              <ExternalLink link={detailPiece} label="click here" />
            ) : (
              `${detailPiece} `
            )
          })}
        </React.Fragment>
      )
    } else {
      detailItem = (
        <React.Fragment>
          <br /> {entities.decode(detail)}
        </React.Fragment>
      )
    }
    return detailItem
  })

  return (
    <Layout>
      <div className="max-w-2xl mx-auto my-8 sm:my-16 px-6">
        <div className="text-xl font-bold tracking-widest py-3 my-3 text-center border-b">
          <span className="white-oleander tracking-normal text-4xl font-light">
            {listing.title}
          </span>
          <br />
          <span className="italic text-base">Starting at ${listing.price}</span>
        </div>
        <img
          className="border"
          src={images.nodes[0].url_fullxfull}
          alt={listing.title}
        />
        <div className="py-3">
          <div className="mb-3 py-6 text-center border-b border-t">
            <EtsyButton link={listing.url} full={true} />
          </div>
          {content}
        </div>
        <div className="text-center py-3">
          <EtsyButton link={listing.url} full={true} />
        </div>
      </div>
    </Layout>
  )
}

Jewelry.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Jewelry
