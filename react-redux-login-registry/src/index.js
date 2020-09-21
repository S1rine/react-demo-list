import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

import store from './redux/store'
import { Provider } from 'react-redux'

import route from './route'
import { BrowserRouter as Router } from 'react-router-dom'

import NavigationBar from './components/NavigationBar'
import FlashMessagesList from './components/flash/FlashMessagesList'

ReactDOM.render(
  <Provider store={store}>
    <Router routes={route}>
      <NavigationBar />
      <FlashMessagesList />
      {route}
    </Router>
  </Provider>,
  document.getElementById('root')
)
