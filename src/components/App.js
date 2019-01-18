import React, { Component } from 'react';
import { connect } from 'react-redux';
import PokemonTypeSelect from './PokemonTypeSelect';
import Pokemons from './Pokemons';
import { fetchPokemons, fetchTypes } from '../store/actions';

class App extends Component {
  componentDidMount() {
    this.props.fetchPokemons();
    this.props.fetchTypes();
  }

  render() {
    return (
      <div>
        <PokemonTypeSelect />
        <Pokemons />
      </div>
    );
  }
}

export default connect(
  null,
  { fetchPokemons, fetchTypes }
)(App);
