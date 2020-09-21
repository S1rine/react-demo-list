import React from 'react'
import { connect } from 'react-redux'

class App extends React.Component {
  render () {
    const { user } = this.props
    return (
      <div className="jumbotron">
        <h1>Hi {user.username}</h1>
      </div>
    )
  }
}

export default connect(
  state => ({ user: state.auth })
)(App)
