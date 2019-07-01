import React, { Component } from "react"
import { Link } from "gatsby"
import menu from "./mobileMenu.module.css"
import routes from "../../routes"

export default class MobileMenu extends Component {
  constructor() {
    super()
    this.state = {
      showMenu: false,
    }
  }

  showMenu = event => {
    event.preventDefault()
    this.setState({ showMenu: true }, () => {
      document.addEventListener("click", this.closeMenu)
    })
  }

  closeMenu = event => {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener("click", this.closeMenu)
    })
  }

  render() {
    return (
      <div className={menu.mobile_menu}>
        <span onClick={this.showMenu}>
          <div>&#9776;</div>
        </span>
        {this.state.showMenu ? (
          <div
            className={menu.mobile_menu_item}
            ref={element => {
              this.dropdownMenu = element
            }}
          >
            <div>
              aaa
            </div>
            {routes.map(item => {
              return (
                <Link
                  className={menu.mobile_menu_font_item}
                  key={item.title}
                  to={item.path}
                >
                  {item.title}
                </Link>
              )
            })}
          </div>
        ) : null}
      </div>
    )
  }
}
