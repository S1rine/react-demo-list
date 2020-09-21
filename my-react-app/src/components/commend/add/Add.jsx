import React, { Component } from 'react'
import './add.css'

class Add extends Component {
  userName = React.createRef()
  content = React.createRef()
  commendSubmit = () => {
    const user = this.userName.current.value
    const content = this.content.current.value
    const { addListAction } = this.props
    if (!user || !content) return
    addListAction({ user, content })
    this.clearInput()
  }
  clearInput = () => {
    this.userName.current.value = ''
    this.content.current.value = ''
  }
  render () {
    const { commendSubmit, userName, content } = this
    return (
      <div className="add">
        <div className="user">
          <div className="user_title">用户名</div>
          <input ref={userName} className="input" type="text" placeholder="用户名" />
        </div>
        <div className="content">
          <div className="content_title">评论内容</div>
          <textarea ref={content} className="input" name="" id="" cols="30" rows="5" placeholder="评论内容"></textarea>
        </div>
        <div className="submit">
          <button onClick={commendSubmit}>提交</button>
        </div>
      </div>
    )
  }
}

export default Add