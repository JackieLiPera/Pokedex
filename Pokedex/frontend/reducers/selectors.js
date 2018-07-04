// import { values } from 'lodash';

export const selectAllPokemon = (state) => {
  const pokeArray = Object.values(state.entities.pokemon);
  return pokeArray;
};
