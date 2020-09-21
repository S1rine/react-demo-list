import React, { Component } from 'react'
import classnames from 'classnames'
import { withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { userLoginRequest, loginSuccess } from '../../redux/actions'
import validateInput from '../../utils/login'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    errors: {},
    isLoading: false,
    invalid: false
  }
  checkIfLogin = () => {
    const { user } = this.props
    if (!user.Id) return false
    return true
  }
  isValid = (e) => {
    const { errors, isValid } = validateInput(this.state)
    if (!isValid) {
      this.setState({ errors })
    }
    return isValid
  }
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  onSubmit = (e) => {
    e.preventDefault()
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true })
      this.props.userLoginRequest(this.state).then(
        ({ data }) => {
          if (data.code === 0) {
            const user = { ...data.result }
            this.props.loginSuccess(user)
            this.props.history.push('/')
          }
        },
        ({ response }) => { this.setState({ errors: response.data, isLoading: false }) }
      )
    }
  }
  render () {
    if (this.checkIfLogin()) {
      return <Redirect to="/" />
    }
    const { errors, isLoading, invalid } = this.state
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Login</h1>
        {errors.form && <div className="alert alert-danger">{errors.form}</div>}
        <div className="form-group">
          <label className="control-label">Username</label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.onChange}
            className={classnames('form-control', { 'is-invalid': errors.username })}
          />
          {errors.username && <span className="form-text text-muted">{errors.username}</span>}
        </div>
        <div className="form-group">
          <label className="control-label">password</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.onChange}
            className={classnames('form-control', { 'is-invalid': errors.password })}
          />
          {errors.password && <span className="form-text text-muted">{errors.password}</span>}
        </div>
        <div className="form-group">
          <button disabled={isLoading || invalid} className="btn btn-primary btn-lg">submit</button>
        </div>
      </form>
    )
  }
}

export default connect(
  state => ({ user: state.auth }),
  { userLoginRequest, loginSuccess }
)(withRouter(LoginForm))