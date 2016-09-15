import React, { Component } from 'react'
import SearchBar from './SearchBar'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({queryString: e.target.value})
  }

  apiQuery() {
    return
  }

  handleSubmit(e) {
    e.preventDefault()
    fetch(`http://www.omdbapi.com/?t=${this.state.queryString}&plot=short&r=json`)
      .then((response) => response.json())
      .then((json)=> this.setState({response: json}))
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to IMDButts</h2>
          <SearchBar handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
        </div>
      </div>
    )
  }
}

export default App
