import { connect } from 'react-redux';
import { requestAllPokemon } from '../../actions/pokemon_actions';
import PokemonIndex from './pokemon_index';
import { selectAllPokemon } from '../../reducers/selectors';

const mSP = (state) => {
  return {
    pokemon: selectAllPokemon(state)
  };
};

const mDP = (dispatch) => {
  return {
    requestAllPokemon: () => dispatch(requestAllPokemon())
  };
};

export default connect(mSP, mDP)(PokemonIndex);
