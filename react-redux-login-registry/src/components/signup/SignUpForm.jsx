import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import classnames from 'classnames'
import { connect } from 'react-redux'
import { loginSuccess } from '../../redux/actions'

class SignUpForm extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    errors: {},
    isLoading: false,
    invalid: false
  }
  checkUserExists = (e) => {
    const field = e.target.name
    const val = e.target.value
    let invalid = true
    if (val.trim()) {
      this.props.isUserExists(val).then(({ data }) => {
        let errors = this.state.errors
        if (data.length) {
          errors[field] = '用户名存在：' + field
        } else {
          errors[field] = ''
          invalid = false
        }
        this.setState({ errors, invalid })
      })
    }
  }
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  onSubmit = (e) => {
    e.preventDefault()
    this.setState({ errors: {}, isLoading: true })
    this.props.userSignUpRequest(this.state).then(
      ({ data }) => {
        if (data.code === 0) {
          this.props.loginSuccess(data.result)
          this.props.addFlashMessage({ type: 'success', text: '注册成功，欢迎你加入我们' })
          this.props.history.push('/')
        }
      },
      ({ response }) => { this.setState({ errors: response.data, isLoading: false }) }
    )
  }
  render () {
    const { errors, isLoading, invalid } = this.state
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Join our community</h1>
        <div className="form-group">
          <label className="control-label">Username</label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.onChange}
            onBlur={this.checkUserExists}
            className={classnames('form-control', { 'is-invalid': errors.username })}
          />
          {errors.username && <span className="form-text text-muted">{errors.username}</span>}
        </div>
        <div className="form-group">
          <label className="control-label">email</label>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.onChange}
            className={classnames('form-control', { 'is-invalid': errors.email })}
          />
          {errors.email && <span className="form-text text-muted">{errors.email}</span>}
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
          <label className="control-label">passwordConfirmation</label>
          <input
            type="password"
            name="passwordConfirmation"
            value={this.state.passwordConfirmation}
            onChange={this.onChange}
            className={classnames('form-control', { 'is-invalid': errors.passwordConfirmation })}
          />
          {errors.passwordConfirmation && <span className="form-text text-muted">{errors.passwordConfirmation}</span>}
        </div>
        <div className="form-group">
          <button disabled={isLoading || invalid} className="btn btn-primary btn-lg">submit</button>
        </div>
      </form>
    )
  }
}

export default connect(
  state => ({}),
  { loginSuccess }
)(withRouter(SignUpForm))