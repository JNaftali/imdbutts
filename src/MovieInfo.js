import React, { Component } from 'react'
import SearchPoster from './SearchPoster'

class MovieInfo extends Component {
  constructor() {
    super()
    this.state = {
      toggleDetails: false,
      movieDetails: {}
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    // this.props.handleClick(e)
    e.preventDefault()
    this.setState({
      toggleDetails: this.state.toggleDetails ? false : true,
      drawer: this.state.toggleDetails ? "close-details-drawer" : "open-details-drawer"
    })
    fetch(`http://www.omdbapi.com/?i=${this.props.movie.imdbID}`)
      .then((response) => response.json())
      .then((json)=> this.setState({movieDetails: json}))
  }

  movieDetails() {
    if (this.state.toggleDetails) {
      const { Plot, Rated, Actors } = this.state.movieDetails
      const style = {
        fontSize: 'small',
        position: 'relative'
      }
      return (
        <div className={this.state.drawer}>
          <p style={style}>Rated: {Rated}</p>
          <p style={style}>Starring: {Actors}</p>
          <p>{Plot}</p>
        </div>
      )
    } else {
      return null
    }
  }

  render() {
    const { Title, Poster, Year } = this.props.movie
    return (
      <li onClick={this.handleClick} ref={(ref) => this.myPanel = ref}>
        <div className="search-result-li">
          <SearchPoster name={Title} src={Poster} />
          <h3>{Title}({Year})</h3>
        </div>
        {this.movieDetails()}
      </li>
    )
  }
}

export default MovieInfo
