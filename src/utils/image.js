/**
 * Gets details pokemon image
 * @param {integer|string} pokeID
 * @returns
 */
export function getPokemonImageDetail(pokeID) {
  return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokeID
    .toString()
    .padStart(3, '0')}.png`;
}

/**
 * Gets sprite pokemon image
 * @param {integer} pokeID
 * @returns
 */
export function getPokemonImageFull(pokeID) {
  return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokeID
    .toString()
    .padStart(3, '0')}.png`;
}
