import React from 'react';
import Loading from './Loading';
import { getIdFromUrl } from '../utils';
import { getPokemonImageDetail } from '../utils/image';

const PokemonItem = ({ name, url }) => {
  const id = getIdFromUrl(url);
  const imgageUrl = getPokemonImageDetail(id);
  return (
    <figure>
      <img height={215} width={215} src={imgageUrl} alt={name} />
      {name[0].toUpperCase() + name.substring(1)}
    </figure>
  );
};

export default PokemonItem;
