/**
 * Get http request
 * @param {string} url
 * @returns
 */
async function get(url) {
  const baseUrl = 'https://pokeapi.co/api/v2/';
  const res = await fetch(baseUrl + url);
  return await res.json();
}

/**
 * Get the pokemon by id
 * @param {int} id
 * @returns
 */
export function getPokemon(id) {
  return get(`pokemon/${id}?limit=151`);
}

/**
 * Get list of pokemon
 */
export function getPokemonList() {
  return get('pokemon');
}
