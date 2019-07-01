import React from "react"
import headerStyles from "./header.module.css"
import Menu from "./menu/menu"
import MobileMenu from "./mobileMenu/MobileMenu"

export default props => (
  <div>
    <header className={headerStyles.header}>
      <div className={headerStyles.header_menu}>
        <Menu />
      </div>
    </header>
    <MobileMenu routers="route" />
  </div>
)
