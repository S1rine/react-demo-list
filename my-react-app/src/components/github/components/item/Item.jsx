import React, { Component } from 'react'

class Item extends Component {
  render () {
    const { users } = this.props
    return (
      <div className="card">
        <a href={users.html_url} target="_blank" rel="noopener noreferrer">
          <img src={users.avatar_url} alt={users.login} />
        </a>
        <p className="card-text">{users.login}</p>
      </div>
    )
  }
}

export default Item