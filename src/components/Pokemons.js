import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from './SearchBar';
import PokemonsTable from './PokemonsTable';
import Loading from './Loading';

class Pokemons extends Component {
  state = {
    filterText: ''
  };

  handleFilterPokemons = (filterText) => {
    this.setState({
      filterText: filterText
    });
  };

  render() {
    const { loading, pokemons } = this.props;

    let content = <Loading />;
    if (!loading) {
      content = <PokemonsTable pokemons={pokemons} filterText={this.state.filterText} />;
    }

    return (
      <div>
        <SearchBar onFilterPokemons={this.handleFilterPokemons} />
        {content}
      </div>
    );
  }
}

export default connect((state) => ({
  pokemons: state.pokemons.pokemons,
  loading: state.loading
}))(Pokemons);
