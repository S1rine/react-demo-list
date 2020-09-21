import React, { Component } from 'react'

class Search extends Component {
  search = React.createRef()
  searchClick = async () => {
    const { search } = this
    const { value } = search.current
    const { asyncSearchAction } = this.props
    asyncSearchAction(value)
    search.current.value = ''
  }
  render () {
    const { search, searchClick } = this
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input ref={search} type="text" placeholder="enter the name you search" />
          <button onClick={searchClick}>Search</button>
        </div>
      </section>
    )
  }
}

export default Search