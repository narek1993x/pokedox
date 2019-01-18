import * as types from './actionTypes';
import axios from 'axios';
const API = 'https://pokeapi.co/api/v2';

const fethData = async (url, params = {}) => {
  try {
    return await axios.get(url, { ...params });
  } catch (error) {
    throw error;
  }
};

const fetchPokemon = async (url) => {
  const response = await fethData(url);
  let { name, height, weight, sprites } = response.data;
  let pokemon = { avatar: sprites.front_default, name, height, weight };
  return pokemon;
};

export const getPokemons = (pokemons) => {
  return {
    type: types.GET_ALL_POKEMONS,
    payload: pokemons
  };
};

export const getTypes = (pokemonTypes) => {
  return {
    type: types.GET_TYPES,
    payload: pokemonTypes
  };
};

export const getAllPokemonsByType = (data) => {
  return {
    type: types.GET_POKEMONS_BY_TYPE,
    payload: data
  };
};

export const loading = (bool) => {
  return {
    type: types.LOADING,
    payload: bool
  };
};

export const fetchPokemonsByType = (url) => {
  return async (dispatch) => {
    try {
      dispatch(loading(true));

      let {
        data: { pokemon: pokemons }
      } = await fethData(url);
      pokemons = pokemons.slice(0, 10);
      const allPokemons = await Promise.all(pokemons.map(({ pokemon }) => fetchPokemon(pokemon.url)));

      dispatch(getAllPokemonsByType(allPokemons));
      dispatch(loading(false));
    } catch (error) {
      dispatch(loading(false));
      throw error;
    }
  };
};

export const fetchPokemons = () => {
  return async (dispatch) => {
    try {
      dispatch(loading(true));

      const {
        data: { results: pokemons }
      } = await fethData(`${API}/pokemon`, { params: { limit: 10 } });
      const allPokemons = await Promise.all(pokemons.map(({ url }) => fetchPokemon(url)));

      dispatch(getPokemons(allPokemons));
      dispatch(loading(false));
    } catch (error) {
      dispatch(loading(false));
      throw error;
    }
  };
};

export const fetchTypes = () => {
  return async (dispatch) => {
    try {
      const {
        data: { results }
      } = await fethData(`${API}/type`, { params: { limit: 10 } });
      dispatch(getTypes(results));
    } catch (error) {
      throw error;
    }
  };
};
