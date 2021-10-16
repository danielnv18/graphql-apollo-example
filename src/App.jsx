import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PokedexPage from './pages/PokedexPage';
import PokemonPage from './pages/PokemonPage';
import clasess from './styles/app.module.css';

function App() {
  return (
    <div className={clasess.root}>
      <div className={clasess.container}>
        <Switch>
          <Route path="/pokedex/:id" component={PokemonPage} />
          <Route path="/pokedex" component={PokedexPage} />
          <Redirect from="/" to="/pokedex" />
        </Switch>
      </div>
    </div>
  );
}

export default App;
