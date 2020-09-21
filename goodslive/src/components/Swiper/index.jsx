import React, { Component } from 'react'
import SwipeableViews from 'react-swipeable-views'
import Pagination from './Pagination'
import "./style.less"

class Swiper extends Component {
  state = {
    currentIndex: 0
  }
  handleChangeIndex = index => {
    this.setState({
      currentIndex: index
    })
  }
  render () {
    const banners = this.props.banners;
    return (
      <div className="swiper">
        <SwipeableViews onChangeIndex={this.handleChangeIndex}>
          {
            banners.map((element, index) => {
              return (
                <div className="swiper-view" key={index}>
                  <img src={element} alt="" />
                </div>
              )
            })
          }
        </SwipeableViews>
        <Pagination index={this.state.currentIndex} dots={banners.length} />
      </div>
    )
  }
}

export default Swiper