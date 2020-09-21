import React, { Component } from 'react'
import Item from '../item/Item'

class List extends Component {
  render () {
    const { users, isLoading } = this.props.state
    if (users && users.length) {
      return (
        <div className="row">
          {
            users.map(item => {
              return <Item key={item.id} users={item} />
            })
          }
        </div>
      )
    } else if (isLoading) {
      return (
        <div className="row">
          Loading....
        </div>
      )
    } else {
      return (
        <div className="row">
          暂无内容
        </div>
      )
    }
  }
}

export default List