import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import "./body.scss"

const Body = () => {
  return (
    <div>
      <div className="body-container">
        <div className="big-image">
          <div className="big-image-inner">
            <StaticImage
              src="../images/big-img.png"
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Project holder"
            />
          </div>
        </div>
        <div className="spacer-30-height"></div>
        <div className="small-image">
          <div className="small-image-inner">
            <StaticImage
              src="../images/left-img.png"
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Project holder"
            />
            <div className="spacer-30-width"></div>
            <StaticImage
              src="../images/right.png"
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Project holder"
            />
          </div>
        </div>
        <div className="spacer-30-height"></div>
        <div className="big-image">
          <div className="big-image-inner">
            <StaticImage
              src="../images/big-img.png"
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Project holder"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Body
