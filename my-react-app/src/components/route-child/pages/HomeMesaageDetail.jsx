import React, { Component } from 'react'

export default class HomeMesaageDetail extends Component {
  state = {
    message: [
      { mid: 1, title: '1', content: 'message01' },
      { mid: 2, title: '2', content: 'message02' },
      { mid: 3, title: '3', content: 'message03' },
      { mid: 4, title: '4', content: 'message04' }
    ]
  }
  render () {
    const { id } = this.props.match.params
    const { message } = this.state
    const item = message.find(v => v.mid === +id)
    return (
      <ul>
        <li>ID: {item.mid}</li>
        <li>TITLE: {item.title}</li>
        <li>CONTENT: {item.content}</li>
      </ul>
    )
  }
}
