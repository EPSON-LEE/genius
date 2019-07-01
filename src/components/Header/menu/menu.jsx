import React, { Component } from "react"
import { Link } from "gatsby"
import routes from "../../routes"
import menuCss from "./menu.module.css"

const ListLink = props => (
  <Link
    className={menuCss.header_menu_link}
    activeClassName={menuCss.header_menu_link_activeClassName}
    to={props.to}
  >
    {props.children}
  </Link>
)

export default class PCRouter extends Component {
  constructor() {
    super()
  }

  render() {
    return routes.map(item => {
      return (
        <ListLink key={item.title} to={item.path}>
          {item.title}
        </ListLink>
      )
    })
  }
}
