import React from "react"

import Layout from "../components/layout"
import Command from "../components/command"

const IndexPage = () => (
  <Layout>
    <br/>
    <Command command="help"></Command>
    <span>who: About YHG</span><br/>
    <span>ls -l [options]: Show options (projects / publications / blog)</span>
  </Layout>
)

export default IndexPage
