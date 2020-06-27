import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import data from "../../content/homepage.json"

const IndexPage = props => {
  const data = useStaticQuery(graphql`
    query {
      listings: allFeaturedEtsyListing {
        nodes {
          listing_id
          url
          title
          price
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

  console.log(data)

  return (
    <Layout location={props.location}>
      <SEO title="Home" />
      <div className="landing-grid grid my-8 sm:my-16 p-3">
        {data.listings.nodes.map(listing => {
          const listing_image = data.images.nodes.filter(
            item => item.listing_id === listing.listing_id
          )
          return (
            <div key={listing.listing_id} className="text-center">
              <Link to={`/shop/${listing.listing_id}`}>
                <img
                  className="border max-w-full h-auto"
                  src={listing_image[0].url_fullxfull}
                  alt="test"
                />
              </Link>
              <p className="py-1 tracking-wider border-b">{listing.title}</p>
              <p className="py-1 text-xl">${listing.price}</p>
              <div className="py-1">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={listing.url}
                  className="py-3 px-10 tracking-widest bg-brand rounded-lg hover:bg-brand-dark hover:text-white transition ease-in duration-300 font-bold uppercase border-brand-dark border-2 border-t-0 border-l-0"
                >
                  Buy on ETSY
                </a>
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
