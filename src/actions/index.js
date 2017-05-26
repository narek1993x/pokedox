import * as types from "./actionTypes";
import axios from "axios";        
let API = "http://pokeapi.co/api/v2";

export function getPokemons(pokemons) {       
    return {
        type: types.GET_ALL_POKEMONS,
        payload: pokemons
    }
}

export function getTypes(pokemonTypes) {
    return {
        type: types.GET_TYPES,
        payload: pokemonTypes        
    }
}

export function getAllPokemonsByType(data) {    
    return {
        type: types.GET_POKEMONS_BY_TYPE,
        payload: data
    }
}

export function loading(bool) {
    return {
        type: types.LOADING,
        payload: bool
    }
}

export function fetchPokemonsByType(url) {    
    return function(dispatch) {
        dispatch(loading(true));
        axios.get(url)
        .then(response => {
            let { pokemon } = response.data;
            pokemon = pokemon.splice(0, 10);           
            return Promise.all(pokemon.map(item => {
                return axios.get(item.pokemon.url)
                    .then(response => {                        
                        let { name, height, weight, sprites } = response.data;
                        let pokemon = { avatar: sprites.front_default, name, height, weight };
                        return pokemon;
                    });
            })).then(response => {
                dispatch(getAllPokemonsByType(response));
                dispatch(loading(false));
            })
        })
    }    
}

export function fetchPokemons() {
    return function(dispatch) {
        dispatch(loading(true));        
        axios.get(`${API}/pokemon`, { params: { limit: 10 } })        
        .then(response => {
            let { results } = response.data;            
            return Promise.all(results.map(pokemon => {
                return axios.get(pokemon.url)
                    .then(response => {
                        let { name, height, weight, sprites } = response.data;
                        let pokemon = { avatar: sprites.front_default, name, height, weight };
                        return pokemon;
                    });
            })).then(response => {
                dispatch(getPokemons(response));
                dispatch(loading(false));
            })
        })
    }    
}

export function fetchTypes() {
    return function(dispatch) {        
        return axios.get(`${API}/type`, { params: { limit: 10 } })
            .then(response => dispatch(getTypes(response.data.results)))
    }
    
}


