import React, { Component } from 'react'
import Title from './title/Title'
import Add from '../../container/Add'
import List from '../../container/List'
import './commend.css'

class Commend extends Component {
  state = {
    title: '请发表对React的评论'
  }
  render () {
    const { title } = this.state
    return (
      <div>
        <Title title={title} />
        <div className="container">
          <Add />
          <List />
        </div>
      </div>
    )
  }
}

export default Commend