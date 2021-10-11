import React from 'react';
import { getIdFromUrl } from '../utils';
import { getPokemonImageDetail } from '../utils/image';
import clasess from '../styles/app.module.css';

const PokemonItem = ({ name, url }) => {
  const id = getIdFromUrl(url);
  const imgageUrl = getPokemonImageDetail(id);
  return (
    <div>
      <figure className={clasess.pokemonTeaser}>
        <img height={205} width={205} src={imgageUrl} alt={name} />
      </figure>
      <span>
        #{id.padStart(3, 0)} - {name[0].toUpperCase() + name.substring(1)}
      </span>
    </div>
  );
};

export default PokemonItem;
