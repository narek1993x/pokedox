import React from 'react';

const PokemonsTable = ({ pokemons, filterText }) => {
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
        {pokemons
          .filter((pokemon) => pokemon.name.toLowerCase().includes(filterText.toLowerCase()))
          .map((pokemon, i) => {
            const { avatar, height, weight, name } = pokemon;

            return (
              <tr key={i} className="pokemon-table">
                <td>
                  {' '}
                  <img src={avatar} alt="pic" />
                </td>
                <td>{name}</td>
                <td>{height}</td>
                <td>{weight}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default PokemonsTable;
