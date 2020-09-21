import React, { Component } from 'react'
import SignUpForm from './SignUpForm'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../redux/actions'

class SignUpPage extends Component {
  render () {
    console.log(this.props)
    return (
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <SignUpForm
            userSignUpRequest={this.props.userSignUpRequest}
            addFlashMessage={this.props.addFlashMessage}
            isUserExists={this.props.isUserExists}
          />
        </div>
        <div className="col-md-3"></div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    userSignUpRequest: bindActionCreators(Actions.userSignUpRequest, dispatch),
    isUserExists: bindActionCreators(Actions.isUserExists, dispatch),
    addFlashMessage: bindActionCreators(Actions.addFlashMessage, dispatch)
  }
}

export default connect(
  state => ({}),
  mapDispatchToProps
)(SignUpPage)