import React from 'react';
import { useQuery, gql } from '@apollo/client';
import PokemonTeaser from './PokemonTeaser';
import clasess from '../styles/app.module.css';
import Loading from './Loading';

const POKEMON_LIST = gql`
  query listOfPokemons {
    pokemons: pokemon_v2_pokemon(limit: 151) {
      id
      name
      types: pokemon_v2_pokemontypes {
        type: pokemon_v2_type {
          name
        }
      }
    }
  }
`;

const PokemonList = () => {
  const { loading, error, data } = useQuery(POKEMON_LIST);

  if (loading) return <Loading />;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <section className={clasess.pokedex}>
        {data.pokemons.map((pokemon) => (
          <PokemonTeaser {...pokemon} key={pokemon.id} />
        ))}
      </section>
    </>
  );
};

export default PokemonList;
