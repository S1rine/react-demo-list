import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { userLogoutRequest, logoutSuccess } from '../redux/actions'

class NavigationBar extends Component {
  logout = () => {
    this.props.userLogoutRequest().then(({ data }) => {
      if (data.code === 0) {
        this.props.logoutSuccess()
      }
    })
  }
  render () {
    const { user } = this.props
    const isAuthenticated = !!user.Id

    const userLinks = (
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a className="nav-link" onClick={this.logout}>退出</a>
        </li>
      </ul>
    )
    const guestLinks = (
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/signup">注册</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">登录</Link>
        </li>
      </ul>
    )
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
        <div className="container">
          <Link className="navbar-brand" to="/">Login功能</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample05">
            {isAuthenticated ? userLinks : guestLinks}
          </div>
        </div>
      </nav>
    )
  }
}
export default connect(
  state => ({ user: state.auth }),
  { userLogoutRequest, logoutSuccess }
)(NavigationBar)