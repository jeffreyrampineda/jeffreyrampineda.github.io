import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

const AboutPage = () => (
  <Layout>
    <SEO title="About" description="About" />
    <div className="content">
      <h1>About</h1>
      <p className="mt-3">
        A junior Web Developer with a strong passion for innovative and creative
        ideas. Heavily interested in data-centric applications in which machine
        learning technologies can be applied to. Primarily uses Javascript with
        secondary Python but continues to study other languages.
      </p>
    </div>
  </Layout>
)

export default AboutPage
