import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" description="Where to contact Jeffrey" />
    <div class="content">
      <h1>Contact</h1>
      <ul class="mt-3">
        <li>
          <strong>Email</strong>:{" "}
          <a href="mailto:jeffreyram@pineda.org">jeffreyram@pineda.org</a>
        </li>
        <li>
          <strong>Github</strong>:{" "}
          <a href="https://github.com/jeffreyrampineda">
            github.com/jeffreyrampineda
          </a>
        </li>
        <li>
          <strong>Linkedin</strong>:{" "}
          <a href="https://www.linkedin.com/in/jeffreyrampineda/">
            linkedin.com/in/jeffreyrampineda
          </a>
        </li>
      </ul>
    </div>
  </Layout>
)

export default ContactPage
