import React, { Component } from 'react'
import classnames from 'classnames'

export default class FlashMessage extends Component {
  onClick = () => {
    console.log(this.props)
    this.props.deleteFlashMessage(this.props.message.id)
  }
  render () {
    const { type, text } = this.props.message
    return (
      <div className={classnames('alert', {
        'alert-success': type === 'success',
        'alert-danger': type === 'danger'
      })}>
        {text}
        <button onClick={this.onClick} className="close">&times;</button>
      </div>
    )
  }
}
