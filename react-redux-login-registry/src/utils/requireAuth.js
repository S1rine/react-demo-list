import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addFlashMessage } from '../redux/actions'
import { withRouter } from 'react-router-dom'

export default function (ComposedComponent) {
  class requireAuth extends Component {
    componentWillMount () {
      if (!this.props.user.Id) {
        this.props.addFlashMessage({
          type: 'danger',
          text: '请先登录'
        })
        this.props.history.push('/login')
      }
    }
    componentWillUpdate (prevProps) {
      if (!prevProps.user.Id) {
        this.props.history.push('/login')
      }
    }
    render () {
      return (
        <ComposedComponent {...this.props} />
      )
    }
  }
  return connect(
    state => ({ user: state.auth }),
    { addFlashMessage }
  )(withRouter(requireAuth))
}