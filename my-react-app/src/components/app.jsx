import React, { Component } from 'react';
import { Button, Select } from 'antd'
import 'antd/dist/antd.min.css'

const { Option } = Select
class App extends Component {
  state = {

  }
  increment = () => {
    this.props.incrementAction(1)
  }
  decrement = () => {
    this.props.decrementAction(1)
  }
  handleOddIncrement = () => {
    let count = this.props.state
    if (count % 2 !== 0) {
      this.increment()
    }
  }
  handleAsyncIncrement = () => {
    this.props.asyncIncrementAction(1)
  }
  handleChange = (v) => {
    this.props.setAction(v)
  }
  render () {
    const count = this.props.state
    const { handleChange, increment, decrement } = this
    return (
      <div>
        <h3>counter: {count}</h3>
        <Select onChange={handleChange}>
          <Option value="1">1</Option>
          <Option value="2">2</Option>
          <Option value="3">3</Option>
          <Option value="4">4</Option>
        </Select>
        &nbsp;&nbsp;
        <Button onClick={increment}> + </Button>&nbsp;&nbsp;
        <Button onClick={decrement}> - </Button>&nbsp;&nbsp;
        <Button onClick={this.handleOddIncrement}> increment if odd </Button>&nbsp;&nbsp;
        <Button onClick={this.handleAsyncIncrement}> increment async </Button>&nbsp;&nbsp;
      </div>
    );
  }
}

export default App