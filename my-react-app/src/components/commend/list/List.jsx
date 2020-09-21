import React, { Component } from 'react'
import './List.css'

class List extends Component {
  deleteHandler = (e) => {
    const index = e.target.getAttribute('data-index')
    const { delListAction } = this.props
    delListAction(index)
  }
  render () {
    const { list } = this.props.state
    const { deleteHandler } = this
    return (
      <div className="list">
        <h2>评论回复：</h2>
        <ul>
          {
            list.length ? list.map((item, index) => {
              return (
                <li key={index} className="list_item">
                  <div className="user">{item.user}说：</div>
                  <div className="content">{item.content}</div>
                  <button data-index={index} className="delete" onClick={deleteHandler}>删除</button>
                </li>
              )
            }) : (
                <p>
                  评论区没有任何内容
                </p>
              )
          }
        </ul>
      </div>
    )
  }
}

export default List