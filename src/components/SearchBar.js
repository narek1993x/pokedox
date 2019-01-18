import React, { Component } from 'react';

const SearchBar = (props) => (
  <div className="well search-bar">
    <span className="glyphicon glyphicon-search search_icon" />
    <input onChange={(e) => props.onFilterPokemons(e.target.value)} className="form-control input_search" />
  </div>
);

export default SearchBar;
