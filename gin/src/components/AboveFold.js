import * as React from "react"
import PropTypes, { func } from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import "./abv-fold.scss"
import "./fonts.scss"

const AboveFold = () => {
  // const text = document.querySelector(".text");
  // text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");
  // const element = document.querySelectorAll("span")
  // for (let i = 0; i < element.length; i++) {
  //   element[i].style.transform = "rotate(" + i * 18 + "deg)"
  // }
  return (
    <div>
      <div className="full-size">
        <div className="name-and-title">
          <h1>
            GINTARE
            <br />
            KUNIGONYTE
          </h1>
          <h2>graphic designer &amp; web developer</h2>
        </div>
        <div className="hero-anim">
          {/* <div className="placeholder"></div> */}
          <div className="circle">
            <div>
              <p className="text">gin is awesome</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboveFold
