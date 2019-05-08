import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import { css } from "@emotion/core"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

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
  const route = () => [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/about/",
      title: "about",
    },
    {
      path: "/contact/",
      title: "contact",
    },
    {
      path: "/article/",
      title: "article",
    },
    {
      path: "/toy/",
      title: "toy",
    },
    {
      path: "/hooks/",
      title: "hooks",
    },
    {
      path: "/todo/",
      title: "todo",
    },
  ]
  return (
    <div
      css={css`
        margin: 0 auto;
        max-width: 900px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}
    >
      <Link to={`/`}>
        <h4
          css={css`
            margin-top: 0;
            margin-bottom: ${rhythm(2)};
            display: inline-block;
            font-style: normal;
          `}
        >
          {data.site.siteMetadata.title}
        </h4>
      </Link>

      <ul style={{ listStyle: `none`, float: `right` }}>
        {route().map(item => (
          <ListLink key={item.title} to={item.path}>
            {item.title}
          </ListLink>
        ))}
      </ul>

      {children}
    </div>
  )
}
