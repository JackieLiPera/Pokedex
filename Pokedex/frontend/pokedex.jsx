import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import * as actions from './actions/pokemon_actions';
import * as APIUtil from './util/api_util';
import Root from './components/root';
// import { HashRouter, Route } from 'react-router-dom';


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();
  window.dispatch = store.dispatch;
  window.getState = store.getState;
  window.fetchAllPokemon = APIUtil.fetchAllPokemon;
  window.receiveAllPokemon = actions.receiveAllPokemon;
  window.requestAllPokemon = actions.requestAllPokemon;
  ReactDOM.render(<Root store={store} />, root);
});
