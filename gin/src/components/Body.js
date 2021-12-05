import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import "./abv-fold.scss"

const Body = () => {
  return (
    <div>
      <div className="big-image">
        <div className="big-image-inner">
          <StaticImage
            src="../images/big-img.png"
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="Project"
          />
        </div>
      </div>
    </div>
  )
}

export default Body
