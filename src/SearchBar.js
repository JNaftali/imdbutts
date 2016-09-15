import React from 'react';

const SearchBar = (props) => (
  <form onSubmit={props.handleSubmit}>
    <input onChange={props.handleChange} type="text" placeholder="Search"/>
  </form>
)

export default SearchBar
