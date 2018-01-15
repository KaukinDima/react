import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    console.log(this.props.children);
    return (
      <div>
        <h3>Repos js</h3>
          <NavLink to="/test/react">React </NavLink>
          {this.props.children}
      </div>
    )
  }
})
