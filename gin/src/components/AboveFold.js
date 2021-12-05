import * as React from "react"
import PropTypes, { func } from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import "./abv-fold.scss"

const AboveFold = () => {
  return (
    <div>
      <div className="full-size">
        <div className="name-and-title">
          <h1>
            GINTARE <br /> KUNIGONYTE
          </h1>
          <h2>graphic designer &amp; web developer</h2>
        </div>
        <div className="hero-anim">
          <div className="placeholder"></div>
        </div>
      </div>
    </div>
  )
}

export default AboveFold
