import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Page Not Found" description="Page Not Found" />
    <div className="content text-center">
      <h1>Page not found</h1>
      <p>Sorry but you are lost, requested page not found!</p>
    </div>
  </Layout>
)

export default NotFoundPage
