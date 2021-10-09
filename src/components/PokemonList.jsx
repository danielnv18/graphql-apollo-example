import React, { useEffect, useState } from 'react';
import PokemonTeaser from './PokemonTeaser';
import { getPokemonList } from '../utils/http';

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await getPokemonList();
      setPokemons(response.results);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Pokemon List</h1>
      <div>
        {pokemons.map((pokemon) => (
          <PokemonTeaser {...pokemon} key={pokemon.url} />
        ))}
      </div>
    </div>
  );
};

export default PokemonList;
