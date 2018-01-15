import React from 'react'

export default React.createClass({
  render() {
    return (
      <div>
        <h2>Repo js</h2>
        <h5><b>repoName</b> {this.props.params.repoName}</h5>
        <h5><b>userName</b> {this.props.params.userName}</h5>
      </div>
    )
  }
})
