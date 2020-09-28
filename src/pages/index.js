import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import PanelOne from "../components/Homepage/PanelOne"
import PanelTwo from "../components/Homepage/PanelTwo"
const IndexPage = () => (
  <Layout>
    <SEO title="Homepage" />
    <PanelOne />
    <PanelTwo />
  </Layout>
)

export default IndexPage
