import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPokemonsByType } from '../store/actions';

class PokemonTypeSelect extends Component {
  state = {
    selectValue: ''
  };

  handleChange = () => {
    this.setState({
      selectValue: this.pokemonType.value
    });
    this.props.fetchPokemonsByType(this.pokemonType.value);
  };

  renderField(item, i) {
    return (
      <option key={i} value={item.url}>
        {item.name}
      </option>
    );
  }

  render() {
    const { fetchTypes } = this.props;

    return (
      <div>
        <select
          ref={(node) => (this.pokemonType = node)}
          onChange={this.handleChange}
          value={this.state.selectValue}
          className="form-control"
        >
          <option />
          {fetchTypes.map(this.renderField)}
        </select>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    fetchTypes: state.pokemons.fetchTypes
  }),
  { fetchPokemonsByType }
)(PokemonTypeSelect);
