import React, { useEffect, useState } from 'react';
import { getPokemon } from '../utils/http';
import Loading from './Loading';
import { getPokemonImageFull } from '../utils/image';
import clasess from '../styles/pokemon.module.css';

const PokemonDetail = ({ id }) => {
  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPokemon(id).then((pokemon) => setPokemon(pokemon) && setLoading(false));
  }, [id]);

  // Render loading if pokemon is not loaded
  if (loading && Object.keys(pokemon).length === 0) {
    return <Loading />;
  }

  return (
    <div className={clasess.pokemonDetail}>
      <div className={clasess.pokemonImage}>
        <img
          src={getPokemonImageFull(pokemon.id)}
          width={430}
          height={430}
          alt={pokemon.name}
          loading="lazy"
        />
      </div>
      <div className={clasess.pokemonInfo}>
        <h1>{pokemon.name}</h1>
        <p>
          <span>Type: </span>
          {pokemon.types.map((type) => (
            <span
              key={type.type.name}
              className={
                clasess[`color${type.type.name}`] +
                ' ' +
                clasess.pokemonAttribute
              }
            >
              {type.type.name}
            </span>
          ))}
        </p>
        <p>
          <span>Height: </span>
          {pokemon.height}
        </p>
        <p>
          <span>Weight: </span>
          {pokemon.weight}
        </p>
        <p>
          <span>Abilities: </span>
          {pokemon.abilities.map((ability) => (
            <span key={ability.ability.name}>{ability.ability.name}</span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default PokemonDetail;
