import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import About from "../components/About"

const AboutPage = () => (
  <Layout>
    <SEO
      title="About"
      description="About"
    />
    <About />
  </Layout>
)

export default AboutPage
