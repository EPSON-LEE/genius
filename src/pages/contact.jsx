import React from "react"
import Layout from "../components/Layout/layout"
import contractCss from "./style/contract.module.css"

export default () => {
  return (
    <Layout>
      <div className="contractCss.container">
        <span className={contractCss.profile} />
        {/* typing animation */}
        <p className={contractCss.typing}>男, 24岁 33232333232 3232sddsssdssdds,dsddsadadadsddsa3343242343</p>
      </div>
    </Layout>
  )
}
