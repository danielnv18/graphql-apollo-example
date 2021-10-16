import React from 'react';
import PokemonList from '../components/PokemonList';

function PokedexPage() {
  return (
    <>
      <h1 style={{ textAlign: 'center', padding: 20 }}>Pokedex</h1>
      <PokemonList />
    </>
  );
}

export default PokedexPage;
