import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

class Command extends React.Component {
  constructor(props) {
      super(props);
      //this.state = {date: new Date()};
  }

  render() {
      return(
          <div className="command">
            <span id="dollar">$> </span>
            <input 
                type="text" 
                value={this.props.command} 
            />
          </div>
      );
  }
}

export default Command;