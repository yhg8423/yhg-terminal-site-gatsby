import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./css/menu.css";

class Menu extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
      return(
          <div className="menu_bar">
              <span><Link to="/who">who</Link></span><span> / </span>
              <span><Link to="/projects">ls -l projects, works, activities</Link></span><span> / </span>
              <span><Link to="/publications">ls -l publications</Link></span><span> / </span>
              <span><Link to="/blog">ls -l blog</Link></span>
          </div>
      );
  }
}

export default Menu;