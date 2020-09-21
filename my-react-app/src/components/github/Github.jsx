import React, { Component } from 'react'
import Search from '../../container/github/Search'
import List from '../../container/github/List'
import './index.css'

class Github extends Component {
  render () {
    return (
      <div className="container">
        <Search />
        <List />
      </div>
    )
  }
}

export default Github