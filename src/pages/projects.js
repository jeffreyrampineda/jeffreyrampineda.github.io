import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Project from "../components/Project"

const ProjectsPage = _ => (
  <Layout>
    <SEO title="Projects" description="Jeffrey's projects" />
    <div className="content">
      <h1>Projects</h1>
      <div className="mt-3 grid-container">
        <Project
          title="Kochii"
          description="Simplify your day to day life by 
          letting Kochii assist you in managing your pantry 
          cabinets and cooking ingredients."
          link="https://www.kochii.app/"
          imgSrc="/kochii-preview.png"
          imgAlt="Kochii's landing page on a laptop"
        />
        <Project
          title="Habitus"
          description="Discuss Anywhere. Post your comment 
          anywhere. Bypass censorships!"
          link="https://habitus.app/"
          imgSrc="/habitus-preview.png"
          imgAlt="Habitus being used on google chrome"
        />
        <Project
          title="Takugen"
          description="Translates keystrokes to the specified
          language in relation to the English alphabet's phonetics."
          link="https://github.com/jeffreyrampineda/takugen"
          imgSrc="/takugen-preview.png"
          imgAlt="Roman alphabet translated to hiragana with Takugen"
        />
      </div>
    </div>
  </Layout>
)

export default ProjectsPage
