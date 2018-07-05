import React from 'react';


export default class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);

    this.getType = this.getType.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.match.params.pokemonId !== this.props.match.params.pokemonId) {
      this.props.requestPokemon(newProps.match.params.pokemonId);
    }
  }

  componentDidMount() {
    this.props.requestPokemon(this.props.match.params.pokemonId);
  }

  getType(pokemon) {
    const TYPES = {
      "fire": 'fire',
      "electric": 'electric',
      "normal": 'normal',
      "ghost": 'ghost',
      "psychic": 'psychic',
      "water": 'water',
      "bug": 'bug',
      "dragon": 'dragon',
      "grass": 'grass',
      "fighting": 'fighting',
      "ice": 'ice',
      "flying": 'flying',
      "posion": 'poison',
      "ground": 'ground',
      "rock": 'rock',
      "steel": 'steel'
    };
    return TYPES[pokemon.poke_type];
  }



  render() {
    if (!this.props.pokemon) return null;
    if (!this.props.pokemon.moves) return null;

    let klass = this.getType(this.props.pokemon);
    klass += " image-container";

    return (
      <div className="pokemonDetail">
        <h1>{this.props.pokemon.name}</h1>
        <br></br>
        <div className={klass}>
          <img src={this.props.pokemon.image_url} />
        </div>
        <ul >
          <li>Attack: {this.props.pokemon.attack}</li>
          <li>Defense: {this.props.pokemon.defense}</li>
          <li>Moves: {this.props.pokemon.moves.join(', ')}</li>
        </ul>
      </div>
    );
  }
}
