import React, { useEffect, useState } from 'react';
import PokemonTeaser from './PokemonTeaser';
import { getPokemonList } from '../utils/http';
import clasess from '../styles/app.module.css';

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
    <>
      <section className={clasess.pokedex}>
        {pokemons.map((pokemon) => (
          <PokemonTeaser {...pokemon} key={pokemon.url} />
        ))}
      </section>
    </>
  );
};

export default PokemonList;
