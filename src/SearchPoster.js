import React from 'react'

const SearchPoster = (props) => {
  if (!(props.src === "N/A")) {
    return (
      <div className="search-result-poster">
        <img alt={`Poster for ${props.name}`} src={props.src}/>
      </div>
    )
  } else {
    return <div className="search-result-poster"/>
  }
}

export default SearchPoster
