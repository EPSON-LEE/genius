import React, { Component } from "react"
import { Link } from "gatsby"
import menu from "./mobileMenu.module.css"
import routes from "../../routes"

export default class MobileMenu extends Component {
  constructor() {
    super()
    this.state = {
      visibility: "mobile_menu_item_hide",
    }
  }

  showMenu = event => {
    event.preventDefault()
    this.setState({ visibility: "mobile_menu_item_show" }, () => {
      document.addEventListener("click", this.closeMenu)
    })
  }

  closeMenu = event => {
    this.setState({ visibility: "mobile_menu_item_hide" }, () => {
      document.removeEventListener("click", this.closeMenu)
    })
  }

  render() {
    return (
      <div className={menu.mobile_menu}>
        <span className={menu.mobile_menu_three_line} onClick={this.showMenu}>
          <div
            style={{
              zIndex: 999,
              color: "white",
              fontSize: "40px",
              background: "black",
            }}
          >
            &#9776;
          </div>
        </span>
        <div>
          <div
            className={`${menu[this.state.visibility]}`}
            ref={element => {
              this.dropdownMenu = element
            }}
          >
            {routes.map(item => {
              return (
                <Link
                  activeClassName={menu.mobile_active_menu_font_item}
                  className={menu.mobile_menu_font_item}
                  key={item.title}
                  to={item.path}
                >
                  {item.title}
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}
