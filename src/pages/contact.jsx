import React from "react"
import Layout from "../components/Layout/layout"
import contractCss from "./style/contract.module.css"
import { ReactComponent as ReactIcon } from "../../assets/react.svg"
import { ReactComponent as ReduxIcon } from "../../assets/redux.svg"
import { ReactComponent as AntdIcon } from "../../assets/antd.svg"
import vueIcon from "../../assets/vue.png"

export default () => {
  return (
    <Layout>
      <div className="contractCss.container">
        <span className={contractCss.profile} />
        {/* typing animation */}
        <p className={contractCss.typing}>李嘉豪，男，24岁，前端表单工程师。</p>
        <p> 技能：</p>
        <ReactIcon width="30" /> + <ReduxIcon width="30" /> + <AntdIcon />
        <vueIcon /> 
      </div>
    </Layout>
  )
}
