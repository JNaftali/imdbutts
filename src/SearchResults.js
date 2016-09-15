import React, { Component } from 'react'
import MovieInfo from './MovieInfo'

class SearchResults extends Component {
  render() {
    return (
      <main>
        <ul className="search-results-ul">
          {this.props.results.map((movie, idx) => (
            <MovieInfo key={idx} movie={movie} />
          ))}
        </ul>
      </main>
    )
  }
}

export default SearchResults
