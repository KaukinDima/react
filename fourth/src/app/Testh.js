import React from 'react'

export default React.createClass({
  render() {
    return (
      <div>
        <h2>Testh js</h2>
        <h5><b>repoName</b> {this.props.params.test}</h5>
      </div>
    )
  }
})
