import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import EtsyButton from "../components/etsyButton"

const IndexPage = props => {
  const data = useStaticQuery(graphql`
    query {
      listings: allFeaturedEtsyListing {
        nodes {
          listing_id
          url
          title
        }
      }
      images: allEtsyListingImage(filter: { rank: { eq: 1 } }) {
        nodes {
          url_fullxfull
          listing_id
        }
      }
    }
  `)

  return (
    <Layout location={props.location}>
      <SEO title="Home" />
      <div className="landing-grid grid my-8 sm:my-16 p-3">
        {data.listings.nodes.map(listing => {
          const listing_image = data.images.nodes.filter(
            item => item.listing_id === listing.listing_id
          )
          return (
            <div key={listing.listing_id} className="text-center flex flex-col">
              <Link
                to={`/shop/${listing.listing_id}`}
                className="relative product"
              >
                <div className="absolute w-full h-full flex items-center justify-center overlay text-2xl p-3 uppercase font-extrabold text-white tracking-widest text-brand">
                  Learn More
                </div>
                <img
                  className="max-w-full h-auto"
                  src={listing_image[0].url_fullxfull}
                  alt="test"
                />
              </Link>
              <p className="py-3 tracking-wider border-t">{listing.title}</p>
              <div className="flex flex-col justify-between items-center mt-auto">
                <div className="mx-2 flex w-full justify-center">
                  <EtsyButton link={listing.url} />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
}

export default IndexPage
