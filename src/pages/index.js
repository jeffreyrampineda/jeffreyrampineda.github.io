import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Intro from "../components/Intro"
import SkillBars from "../components/SkillBars"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" description="Home" />
    <Intro />
    <SkillBars />
  </Layout>
)

export default IndexPage
