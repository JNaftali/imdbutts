import React, { Component } from 'react'
import SearchBar from './SearchBar'
import SearchResults from './SearchResults'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.submitSearchBar = this.submitSearchBar.bind(this)
    this.typeInSearchBar = this.typeInSearchBar.bind(this)
    this.clickSearchResult = this.clickSearchResult.bind(this)
    this.state = {
      queryString: "wolf",
      response: []
    }
  }

  componentDidMount() {
    fetch(`http://www.omdbapi.com/?s=${this.state.queryString}&r=json`)
      .then((response) => response.json())
      .then((json)=> this.setState({response: json.Search}))
  }

  typeInSearchBar(e) {
    this.setState({queryString: e.target.value})
  }

  submitSearchBar(e) {
    e.preventDefault()
    fetch(`http://www.omdbapi.com/?s=${this.state.queryString}&r=json`)
      .then((response) => response.json())
      .then((json)=> this.setState({response: json.Search}))
  }

  clickSearchResult(e) {
    e.preventDefault()
    console.log(e.currentTarget.href)
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to IMDButts</h2>
          <SearchBar handleSubmit={this.submitSearchBar} handleChange={this.typeInSearchBar}/>
        </div>
        <SearchResults results={this.state.response} handleClick={this.clickSearchResult} />
      </div>
    )
  }
}

export default App
