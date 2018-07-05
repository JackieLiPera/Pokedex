import PokemonDetail from './pokemon_detail';
import { requestPokemon } from '../../actions/pokemon_actions';
import { connect } from 'react-redux';

const mSP = (state, ownProps) => {
  return {
    pokemon: state.entities.pokemon,
    items: state.entities.items
  };
};

const mDP = (dispatch) => {
  return {
    requestPokemon: pokemonId => dispatch(requestPokemon(pokemonId))
  };
};

export default connect(mSP, mDP)(PokemonDetail);
