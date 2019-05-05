import React from "react"
import headerStyles from './header.module.css'

export default props => <h3 className={headerStyles.header}>{props.headerText}</h3>