import React, { Component } from 'react'

class MovieDetails extends Component {
  render() {
    return (
      <div>
        <p>{details ? `Rated: ${Rated}` : null}</p>
        <p>{details ?  `Starring: ${Actors}` : null}</p>
        <p>{details ? Plot : null}</p>
      </div>
    )
  }
}

export default MovieDetails
