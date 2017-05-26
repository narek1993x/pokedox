import React, { Component } from "react";
import { connect } from "react-redux";
import SearchBar from "./SearchBar";
import PokemonsTable from "./PokemonsTable";
import Loading from "./Loading";


class Pokemons extends Component {
    constructor() {
        super();
        this.state = {                                  
            filterText: ""            
        }
       
        this.handleFilterPokemons = this.handleFilterPokemons.bind(this);
    }

    handleFilterPokemons(filterText) {
        this.setState({
            filterText: filterText
        })
    }

    render() {              
        let { filterText } = this.state;       
        
        let { loading, data: { pokemons } } = this.props;                                            
        
        if(filterText){
            pokemons = pokemons.filter(pokemon =>
            pokemon.name.toLowerCase()
            .includes(filterText.toLowerCase()))
        }       

        return (
            <div>
                <SearchBar onFilterPokemons={this.handleFilterPokemons} />
                {!loading && <PokemonsTable pokemons={pokemons} />}
                {loading && <Loading />}                
            </div>
        );
    }
}

export default connect(
    state => ({
        data: state.pokemons,
        loading: state.loading
    })
)(Pokemons);

