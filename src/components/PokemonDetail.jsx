import React from 'react';
import { useQuery, gql } from '@apollo/client';
import Loading from './Loading';
import { getPokemonImageFull } from '../utils/image';
import clasess from '../styles/pokemon.module.css';

const POKEMON_DETAIL = gql`
  query listOfPokemons($name: String!) {
    pokemon: pokemon_v2_pokemon(where: { name: { _eq: $name } }) {
      id
      name
      height
      weight
      abilities: pokemon_v2_pokemonabilities {
        ability: pokemon_v2_ability {
          id
          name
        }
      }
      types: pokemon_v2_pokemontypes {
        type: pokemon_v2_type {
          id
          name
        }
      }
    }
  }
`;

const PokemonDetail = (props) => {
  const { loading, error, data } = useQuery(POKEMON_DETAIL, {
    variables: { name: props.id },
  });

  if (loading) return <Loading />;
  if (error) return <p>Error :(</p>;

  const { pokemon } = data;
  const { id, name, height, weight, types, abilities } = pokemon[0];
  console.log(types);

  return (
    <div className={clasess.pokemonDetail}>
      <div className={clasess.pokemonImage}>
        <img
          src={getPokemonImageFull(id)}
          width={430}
          height={430}
          alt={name}
          loading="lazy"
        />
      </div>
      <div className={clasess.pokemonInfo}>
        <h1>{name}</h1>
        <p>
          <span>Type: </span>
          {types.map(({ type }) => (
            <span
              key={type.id}
              className={
                clasess[`color${type.name}`] + ' ' + clasess.pokemonAttribute
              }
            >
              {type.name}
            </span>
          ))}
        </p>
        <p>
          <span>Height: </span>
          {height}
        </p>
        <p>
          <span>Weight: </span>
          {weight}
        </p>
        <p>
          <span>Abilities: </span>
          <ul>
            {abilities.map(({ ability }) => (
              <li key={ability.id}>
                <p>{ability.name}</p>
              </li>
            ))}
          </ul>
        </p>
      </div>
    </div>
  );
};

export default PokemonDetail;
