import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import HomeMessageDetail from './HomeMesaageDetail'

export default class HomeMessage extends Component {
  state = {
    message: []
  }
  componentDidMount () {
    this.timeId = setTimeout(() => {
      this.setState({
        message: [
          { mid: 1, title: '1', content: 'message01' },
          { mid: 2, title: '2', content: 'message02' },
          { mid: 3, title: '3', content: 'message03' },
          { mid: 4, title: '4', content: 'message04' }
        ]
      })
    }, 2000)
  }
  componentWillUnmount () {
    clearTimeout(this.timeId)
  }
  pushShow = (path) => {
    this.props.history.push(path)
  }
  replaceShow = (path) => {
    this.props.history.replace(path)
  }
  render () {
    const { message } = this.state
    const { pushShow, replaceShow } = this
    return (
      <div>
        <ul>
          {
            message.map(item => {
              return (
                <li key={item.mid}>
                  <Link to={`/home/message/detail/${item.mid}`}>{item.content}</Link>&nbsp;&nbsp;
                  <button onClick={() => { return pushShow(`/home/message/detail/${item.mid}`) }}>push查看</button>&nbsp;&nbsp;
                  <button onClick={() => { return replaceShow(`/home/message/detail/${item.mid}`) }}>replace查看</button>
                </li>
              )
            })
          }
        </ul>
        <button>回退</button>
        <hr />
        <Route path="/home/message/detail/:id" component={HomeMessageDetail} />
      </div>
    )
  }
}
