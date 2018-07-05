import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import { Route } from 'react-router-dom';
import PokemonDetailContainer from './pokemon_detail_container';

export default class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    const pokeArray = this.props.pokemon.map( (pokemon, idx) => {
      return (
        <div key={idx}>
          <PokemonIndexItem className="pokeIndexItem" pokemon={pokemon} key={idx} />
        </div>
      );
    });
    return (
      <div className="everythingContainer">
        <Route component={PokemonDetailContainer} path="/pokemon/:pokemonId" />
        <ul className="pokeindex">
          {pokeArray}
        </ul>
      </div>
    );
  }
}
