import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import PanelOne from "../components/Homepage/PanelOne"
const IndexPage = () => (
  <Layout>
    <SEO title="Homepage" />
    <PanelOne />
  </Layout>
)

export default IndexPage
