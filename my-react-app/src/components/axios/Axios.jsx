import React, { Component } from 'react'
import axios from 'axios'

class Axios extends Component {
  state = {
    isLoading: true,
    repoName: '',
    repoUrl: '',
    errMsg: '',
    keyWords: 'r'
  }
  async componentDidMount () {
    this.getRepo()
  }
  getRepo = async () => {
    const { keyWords } = this.state
    const url = `https://api.github.com/search/repositories?q=${keyWords}&sort=stars`
    const isLoading = false
    const { status, data } = await axios.get(url).catch(err => {
      // console.log(err)
      const errMsg = err.toString()
      this.setState({
        isLoading,
        errMsg
      })
    })
    if (status === 200) {
      const repoName = data.items[0].name
      const repoUrl = data.items[0].html_url
      this.setState({
        isLoading,
        repoName,
        repoUrl
      })
    }
  }
  render () {
    const { keyWords, isLoading, repoName, repoUrl, errMsg } = this.state
    if (isLoading) {
      return <h2>Loading...</h2>
    } else if (errMsg) {
      return <h3>{errMsg}</h3>
    } else {
      return (
        <div>
          <h2>github上包含{keyWords}关键字的所有仓库中，点赞数最多的是<a href={repoUrl || '#1'}>{repoName || 'xxx'}</a></h2>
        </div>
      )
    }
  }
}

export default Axios