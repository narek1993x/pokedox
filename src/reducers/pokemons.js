import * as types from "../actions/actionTypes";
import initialState from "./initialState";


export default function(state = initialState, action) {
    switch(action.type) {
        case types.GET_ALL_POKEMONS:                                           
            return {...state, pokemons: action.payload };
        case types.GET_TYPES:
            return {...state, fetchTypes: action.payload};
        case types.GET_POKEMONS_BY_TYPE:
            return {...state, pokemons: action.payload};        
        default:
            return state;
    }
}