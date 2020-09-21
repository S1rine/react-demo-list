import React, { Component } from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import Life from '../pages/Life'
import Mine from '../pages/Mine'
import Shop from '../pages/Shop'
import NotFound from '../pages/NotFound'

export default class AppRouter extends Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/life" component={Life}></Route>
          <Route path="/shop" component={Mine}></Route>
          <Route path="/mine" component={Shop}></Route>
          <Route path="*" component={NotFound}></Route>
        </Switch>
      </BrowserRouter>
    )
  }
}
