import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import PanelOne from "../components/Homepage/PanelOne"
import PanelTwo from "../components/Homepage/PanelTwo"
import PanelThree from "../components/Homepage/PanelThree"
const IndexPage = () => (
  <Layout>
    <SEO title="Homepage" />
    <PanelOne />
    <PanelTwo />
    <PanelThree />
  </Layout>
)

export default IndexPage
