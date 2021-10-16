import React from 'react';
import { useParams } from 'react-router-dom';
import PokemonDetail from '../components/PokemonDetail';

function PokemonPage() {
  let { id } = useParams();
  return (
    <>
      <h1 style={{ textAlign: 'center', padding: 20 }}>Pokemon</h1>
      <PokemonDetail id={id} />
    </>
  );
}

export default PokemonPage;
