import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <h1>There's a typo in the link, moron.</h1>
    <p>Go back to the homepage...</p>
  </Layout>
)

export default NotFoundPage
