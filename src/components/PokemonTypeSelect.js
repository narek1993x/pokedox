import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPokemonsByType } from "../actions";

class PokemonTypeSelect extends Component {
    constructor() {
        super();

        this.state = {
            selectValue: "",
            types: []
        }

        this.handleChange = this.handleChange.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            types: nextProps.data.fetchTypes
        })
    }
    handleChange(e) {
        e.preventDefault();
        let value = this.refs.selectValue.value;
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
        let { types, selectValue } = this.state;
        
        return (
            <div>
                <select ref="selectValue" onChange={this.handleChange} value={selectValue} className="form-control">
                    <option></option>
                    {types.map(this.renderField)}
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