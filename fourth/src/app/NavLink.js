// modules/NavLink.js
import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    console.log(this.props);
    return (
      <div>
        <h4>Nav link js</h4>
        <Link {...this.props} activeClassName="active"/>
      </div>
    ); 
    
  }
})
