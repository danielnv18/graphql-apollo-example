import React from 'react';
import { Link } from 'react-router-dom';
import { getIdFromUrl } from '../utils';
import { getPokemonImageDetail } from '../utils/image';
import clasess from '../styles/app.module.css';

const PokemonTeaser = ({ name, url }) => {
  const id = getIdFromUrl(url);
  const imgageUrl = getPokemonImageDetail(id);
  return (
    <div>
      <Link to={`/pokedex/${name}`}>
        <figure className={clasess.pokemonTeaser}>
          <img
            height={205}
            width={205}
            src={imgageUrl}
            alt={name}
            loading="lazy"
          />
        </figure>
      </Link>

      <Link to={`/pokedex/${name}`} className={clasess.pokemonTeaserLink}>
        <h5>
          #{id.padStart(3, 0)} - {name[0].toUpperCase() + name.substring(1)}
        </h5>
      </Link>
    </div>
  );
};

export default PokemonTeaser;
