import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import MyNavLink from '../../my-nav-link/MyNavLink'
import HomeMessage from './HomeMessage'
import HomeNews from './HomeNews'

export default class Home extends Component {
  render () {
    return (
      <div>
        <h2>Home组件内容</h2>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <MyNavLink to="/home/news">News</MyNavLink>
            </li>
            <li>
              <MyNavLink to="/home/message">Message</MyNavLink>
            </li>
          </ul>
          <div>
            <Switch>
              <Route path="/home/news" component={HomeNews}></Route>
              <Route path="/home/message" component={HomeMessage}></Route>
              <Redirect to="/home/news"></Redirect>
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}
