import React from 'react';

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
        <li key={idx}>
          <div className="pokeIndexItem">

            <div>
              <h3>{pokemon.name}</h3>
            </div>

            <div>
              <img src={pokemon.image_url} />
            </div>

          </div>
        </li>
      );
    });
    return (
      <ul className="pokeindex">
        {pokeArray}
      </ul>
    );
  }
}
