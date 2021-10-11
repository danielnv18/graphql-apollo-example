import React from 'react';
import PokemonList from '../components/PokemonList';
import clasess from '../styles/app.module.css';

function PokedexPage() {
  return (
    <div className={clasess.container}>
      <h1 style={{ textAlign: 'center', padding: 20 }}>Pokedex</h1>
      <PokemonList />
    </div>
  );
}

export default PokedexPage;
