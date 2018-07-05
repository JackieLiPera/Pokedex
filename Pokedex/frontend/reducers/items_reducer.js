import { RECEIVE_POKEMON } from '../actions/pokemon_actions';
import { merge } from 'lodash';

const itemsReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_POKEMON:
      return merge(newState, action.items);
    default:
      return state;
  }
};

export default itemsReducer;
