import React, { Component } from "react";
import { connect } from "react-redux";
import SearchBar from "./SearchBar";
import PokemonsTable from "./PokemonsTable";
import Loading from "./Loading";


class Pokemons extends Component {
    constructor() {
        super();
        this.state = {
            pokemons: [],                      
            filterText: "",
            loading: true
        }
       
        this.handleFilterPokemons = this.handleFilterPokemons.bind(this);
    }
    componentWillReceiveProps(nextProps) {                     
        this.setState({
            pokemons: nextProps.data.pokemons,
            loading: nextProps.data.loading
        })       
    }    
    
    handleFilterPokemons(filterText) {
        this.setState({
            filterText: filterText
        })
    }
    render() {              
        let { filterText, pokemons, loading } = this.state;                                     
        
        if(filterText){
        pokemons = pokemons.filter(pokemon =>
            pokemon.name.toLowerCase()
            .includes(filterText.toLowerCase()))
        }       

        return (
            <div>
                <SearchBar onFilterPokemons={this.handleFilterPokemons} />
                <PokemonsTable pokemons={pokemons} />
                {loading && <Loading />}                
            </div>
        );
    }
}

export default connect(
    state => ({
        data: state.pokemons
    })
)(Pokemons);

