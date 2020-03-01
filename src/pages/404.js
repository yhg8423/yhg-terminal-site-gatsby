import React from "react"

import Layout from "../components/layout"
import Command from "../components/command"


class NotFoundPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props)

    return (
      <Layout>
        <br/>
        <Command command={"ls -l " + this.props.location.pathname}></Command>
        <span>{"ls -l " + this.props.location.pathname}: page not found...</span>
      </Layout>
    )
  }
}

export default NotFoundPage
