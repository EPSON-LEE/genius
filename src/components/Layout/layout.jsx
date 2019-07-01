import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import layoutCss from "./layout.module.css"
import Header from "../Header/header"

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <div className={layoutCss.layout}>
      <Header />
      <div className={layoutCss.content}>{children}</div>
    </div>
  )
}
