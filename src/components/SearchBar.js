import React, { Component } from 'react';

class SearchBar extends Component {
  constructor() {
    super();
    this.handleFilterPokemons = this.handleFilterPokemons.bind(this);
  }

  handleFilterPokemons(e) {      
      this.props.onFilterPokemons(e.target.value);
  } 
  
  render() {   
    return (
      <div className="well search-bar" >
        <span className="glyphicon glyphicon-search search_icon" />        
        <input onChange={this.handleFilterPokemons} className="form-control input_search" ></input>
      </div>
    );
  }
}

export default SearchBar;