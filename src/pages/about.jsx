import React from "react"
import Layout from "../components/Layout/layout"
import { graphql } from "gatsby"

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default ({ data }) => (
  <Layout>
    <h4>About {data.site.siteMetadata.title}</h4>
  </Layout>
)
