import React, { Component } from "react";

class PokemonsTable extends Component {
    constructor() {
        super();

        this.renderData = this.renderData.bind(this);
    }

    renderData(pokemon, i) {
        let { avatar, height, weight, name} = pokemon;        
                               
        return (
            <tr key={i}  className="pokemon-table">
                <td> <img src={avatar} alt="pic"/></td>
                <td>{name}</td>
                <td>{height}</td>
                <td>{weight}</td>                
            </tr>          
        );
    }
    
    render() {
        let { pokemons } = this.props;

        return (
            <table className="table">
                        <thead>
                        <tr>                    
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Weight</th>
                            <th>Height</th>
                        </tr>
                        </thead>
                        <tbody>
                            {pokemons.map(this.renderData)}
                        </tbody>
                    </table>
        )
    }
    
}

export default PokemonsTable;