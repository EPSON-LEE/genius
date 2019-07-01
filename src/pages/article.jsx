import React from "react"
import { graphql, Link } from "gatsby"
import { css } from "@emotion/core"
import Layout from "../components/Layout/layout"
import articleCss from "./style/article.module.css"

export default ({ data }) => {
  return (
    <Layout>
      <div className={articleCss.article_layout}>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div className={articleCss.article_item} key={node.id}>
            <div className={articleCss.article_item_body}>
              <h2 className={articleCss.article_item_body_title}>
                <Link style={{ color: "black" }} to={node.fields.slug}>
                  {node.frontmatter.title}
                </Link>
              </h2>

              <div className={articleCss.article_item_body_des}>
                <Link
                  style={{
                    color: "rgba(0,0,0,.54)",
                  }}
                  to={node.fields.slug}
                >
                  {node.excerpt}
                </Link>
              </div>

              <div className={articleCss.article_item_body_des}>
                <Link to={node.fields.slug}>{node.frontmatter.date}</Link>
              </div>
            </div>
          </div>
        ))}
        <span>{data.allMarkdownRemark.totalCount} Posts</span>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`
