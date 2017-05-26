import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPokemonsByType } from "../actions";

class PokemonTypeSelect extends Component {
    constructor() {
        super();

        this.state = {
            selectValue: ""            
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        e.preventDefault();
        let { value } = this.pokemonType;
        this.setState({
            selectValue: value
        })
        this.props.fetchPokemonsByType(value)        
    }

    renderField(item, i) {                
        return (
            <option key={i} value={item.url} >{item.name}</option>
        )
    }

    render() {
        let { selectValue } = this.state;
        let { data: { fetchTypes } } = this.props;
        
        return (
            <div>
                <select ref={node => this.pokemonType = node} onChange={this.handleChange} value={selectValue} className="form-control">
                    <option></option>
                    {fetchTypes.map(this.renderField)}
                </select>                
            </div>
        )
    }
}

export default connect(
    state => ({
        data: state.pokemons
    }),
    { fetchPokemonsByType }
)(PokemonTypeSelect);