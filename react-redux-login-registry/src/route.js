import React from 'react'
import { Route } from 'react-router-dom'
import App from './components/App'
import SignUpPage from './components/signup/SignUpPage'
import LoginPage from './components/login/LoginPage'

import requireAuth from './utils/requireAuth'

export default (
  <div className="container">
    <Route exact path="/" component={App}></Route>
    <Route path="/signup" component={SignUpPage}></Route>
    <Route path="/login" component={LoginPage}></Route>
  </div>
)