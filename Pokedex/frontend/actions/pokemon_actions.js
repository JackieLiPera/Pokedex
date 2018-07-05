import * as APIUtil from '../util/api_util';
export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
export const RECEIVE_POKEMON = 'RECEIVE_POKEMON';

export const receiveAllPokemon = (pokemon) => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const requestAllPokemon = () => (dispatch) => {
  return APIUtil.fetchAllPokemon().then(
    pokemon => dispatch(receiveAllPokemon(pokemon))
  );
};

export const receivePokemon = ({ pokemon, items }) => ({
  type: RECEIVE_POKEMON,
  pokemon,
  items
});

export const requestPokemon = (pokemonId) => (dispatch) => {
  return APIUtil.fetchPokemon(pokemonId).then(
  payload => dispatch(receivePokemon(payload)));
};
