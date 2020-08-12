import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Intro from "../components/Intro"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      description="Home"
    />
    <Intro />
  </Layout>
)

export default IndexPage
