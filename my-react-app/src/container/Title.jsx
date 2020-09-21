import React, { Component } from 'react'

class Title extends Component {
  render () {
    const { title } = this.props
    return (
      <div className="title">
        <h1 className="content">{title}</h1>
      </div>
    )
  }
}

export default Title