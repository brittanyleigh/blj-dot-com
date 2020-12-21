import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeading from "../components/pageHeading"
import data from "../../content/reviews.json"
import Image from "../components/image"
import Masonry from "react-masonry-component"

const masonryOptions = {
  transitionDuration: 0,
}

const ReviewsPage = props => {
  const { reviews } = data
  const gallery = []
  for (const review of reviews) {
    gallery.push(
      <div>
        <Image
          filename={review.review_image.replace("/", "")}
          alt={review.review_text}
        />
      </div>
    )
  }

  return (
    <Layout location={props.location}>
      <SEO title="Home" />
      <div className="m-8 sm:m-auto container sm:my-16">
        <PageHeading heading={data.heading} subheading={data.subheading} />
        <Masonry>{gallery}</Masonry>
      </div>
    </Layout>
  )
}

ReviewsPage.propTypes = {
  location: PropTypes.object.isRequired,
}

export default ReviewsPage
