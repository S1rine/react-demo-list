import React, { Component } from 'react';
// import Commend from './components/commend/Commend'
// import Axios from './components/axios/Axios'
import Github from './components/github/Github'
// import Routes from './components/route/Routes'
// import RouteChild from './components/route-child/RouteChild'
// import { BrowserRouter } from 'react-router-dom'
// import { Button, Select } from 'antd'
// import { incrementAction, decrementAction, setAction } from './redux/actions'
// import 'antd/dist/antd.min.css'
// import Commend from './container/Commend'
import './App.css'
class App extends Component {
  render () {
    return (
      <div>
        <Github />
      </div>
    );
  }
}

export default App