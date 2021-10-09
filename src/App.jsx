import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PokedexPage from './pages/PokedexPage';
import PokemonPage from './pages/PokemonPage';

function App() {
  return (
    <Switch>
      <Route path="/pokedex/:id" component={PokemonPage} />
      <Route path="/pokedex" component={PokedexPage} />
      <Redirect from="/" to="/pokedex" />
    </Switch>
  );
}

export default App;
