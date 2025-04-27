import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemonData: [], // Store the Pokémon data
      filterType: '',   // Store the selected filter type
    };
  }
  componentDidMount() {
    // Pokémon data from Generation 1 and 2 (100 Pokémon)
    const samplePokemons = [
      { id: 1, name: 'Bulbasaur', type: 'Grass/Poison', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' },
      { id: 2, name: 'Ivysaur', type: 'Grass/Poison', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png' },
      { id: 3, name: 'Venusaur', type: 'Grass/Poison', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png' },
      { id: 4, name: 'Charmander', type: 'Fire', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png' },
      { id: 5, name: 'Charmeleon', type: 'Fire', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png' },
      { id: 6, name: 'Charizard', type: 'Fire/Flying', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png' },
      { id: 7, name: 'Squirtle', type: 'Water', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png' },
      { id: 8, name: 'Wartortle', type: 'Water', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png' },
      { id: 9, name: 'Blastoise', type: 'Water', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png' },
      { id: 10, name: 'Caterpie', type: 'Bug', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png' },
      { id: 11, name: 'Metapod', type: 'Bug', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png' },
      { id: 12, name: 'Butterfree', type: 'Bug/Flying', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png' },
      { id: 13, name: 'Weedle', type: 'Bug/Poison', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png' },
      { id: 14, name: 'Kakuna', type: 'Bug/Poison', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png' },
      { id: 15, name: 'Beedrill', type: 'Bug/Poison', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png' },
      { id: 16, name: 'Pidgey', type: 'Normal/Flying', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png' },
      { id: 17, name: 'Pidgeotto', type: 'Normal/Flying', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png' },
      { id: 18, name: 'Pidgeot', type: 'Normal/Flying', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png' },
      { id: 19, name: 'Rattata', type: 'Normal', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png' },
      { id: 20, name: 'Raticate', type: 'Normal', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png' },
      { id: 21, name: 'Spearow', type: 'Normal/Flying', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png' },
      { id: 22, name: 'Fearow', type: 'Normal/Flying', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png' },
      { id: 23, name: 'Ekans', type: 'Poison', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png' },
      { id: 24, name: 'Arbok', type: 'Poison', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png' },
      { id: 25, name: 'Pikachu', type: 'Electric', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png' },
      { id: 26, name: 'Raichu', type: 'Electric', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png' },
      { id: 27, name: 'Sandshrew', type: 'Ground', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png' },
      { id: 28, name: 'Sandslash', type: 'Ground', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png' },
      { id: 29, name: 'Nidoran♀', type: 'Poison', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png' },
      { id: 30, name: 'Nidorina', type: 'Poison', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png' },
      { id: 31, name: 'Nidoqueen', type: 'Poison/Ground', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png' },
      { id: 32, name: 'Nidoran♂', type: 'Poison', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png' },
      { id: 33, name: 'Nidorino', type: 'Poison', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png' },
      { id: 34, name: 'Nidoking', type: 'Poison/Ground', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png' },
      { id: 35, name: 'Clefairy', type: 'Fairy', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png' },
      { id: 36, name: 'Clefable', type: 'Fairy', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png' },
      { id: 37, name: 'Vulpix', type: 'Fire', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png' },
      { id: 38, name: 'Ninetales', type: 'Fire', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png' },
      { id: 39, name: 'Jigglypuff', type: 'Fairy/Normal', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png' },
      { id: 40, name: 'Wigglytuff', type: 'Fairy/Normal', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png' },
      { id: 41, name: 'Zubat', type: 'Poison/Flying', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png' },
      { id: 42, name: 'Golbat', type: 'Poison/Flying', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png' },
      { id: 43, name: 'Oddish', type: 'Grass/Poison', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png' },
      { id: 44, name: 'Gloom', type: 'Grass/Poison', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png' },
      { id: 45, name: 'Vileplume', type: 'Grass/Poison', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png' },
      { id: 46, name: 'Paras', type: 'Bug/Grass', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png' },
      { id: 47, name: 'Parasect', type: 'Bug/Grass', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png' },
      { id: 48, name: 'Venonat', type: 'Bug/Poison', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png' },
      { id: 49, name: 'Venomoth', type: 'Bug/Poison', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png' },
      { id: 50, name: 'Diglett', type: 'Ground', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png' },
      { id: 51, name: 'Dugtrio', type: 'Ground', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png' },
      { id: 52, name: 'Meowth', type: 'Normal', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png' },
      { id: 53, name: 'Persian', type: 'Normal', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png' },
      { id: 54, name: 'Psyduck', type: 'Water', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png' },
      { id: 55, name: 'Golduck', type: 'Water', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png' },
      { id: 56, name: 'Mankey', type: 'Fighting', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png' },
      { id: 57, name: 'Primeape', type: 'Fighting', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png' },
      { id: 58, name: 'Growlithe', type: 'Fire', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png' },
      { id: 59, name: 'Arcanine', type: 'Fire', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png' },
      { id: 60, name: 'Poliwag', type: 'Water', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png' },
      { id: 61, name: 'Poliwhirl', type: 'Water', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png' },
      { id: 62, name: 'Politoed', type: 'Water', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png' },
      { id: 63, name: 'Abra', type: 'Psychic', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png' },
      { id: 64, name: 'Kadabra', type: 'Psychic', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png' },
      { id: 65, name: 'Alakazam', type: 'Psychic', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png' },
      { id: 66, name: 'Machop', type: 'Fighting', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png' },
      { id: 67, name: 'Machoke', type: 'Fighting', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png' },
      { id: 68, name: 'Machamp', type: 'Fighting', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png' },
      { id: 69, name: 'Bellsprout', type: 'Grass/Poison', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png' },
      { id: 70, name: 'Weepinbell', type: 'Grass/Poison', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png' },
      { id: 71, name: 'Victreebel', type: 'Grass/Poison', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png' },
      { id: 72, name: 'Tentacool', type: 'Water/Poison', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png' },
      { id: 73, name: 'Tentacruel', type: 'Water/Poison', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png' },
      { id: 74, name: 'Geodude', type: 'Rock/Ground', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png' },
      { id: 75, name: 'Graveler', type: 'Rock/Ground', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png' },
      { id: 76, name: 'Golem', type: 'Rock/Ground', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png' },
      { id: 77, name: 'Ponyta', type: 'Fire', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png' },
      { id: 78, name: 'Rapidash', type: 'Fire', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png' },
      { id: 79, name: 'Slowpoke', type: 'Water/Psychic', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png' },
      { id: 80, name: 'Slowbro', type: 'Water/Psychic', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png' },
      { id: 81, name: 'Magnemite', type: 'Electric/Steel', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png' },
      { id: 82, name: 'Magneton', type: 'Electric/Steel', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png' },
      { id: 83, name: 'Farfetch\'d', type: 'Normal/Flying', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png' },
      { id: 84, name: 'Doduo', type: 'Normal/Flying', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png' },
      { id: 85, name: 'Dodrio', type: 'Normal/Flying', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png' },
      { id: 86, name: 'Seel', type: 'Water', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png' },
      { id: 87, name: 'Dewgong', type: 'Water/Ice', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png' },
      { id: 88, name: 'Grimer', type: 'Poison', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png' },
      { id: 89, name: 'Muk', type: 'Poison', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png' },
      { id: 90, name: 'Shellder', type: 'Water', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png' },
      { id: 91, name: 'Cloyster', type: 'Water/Ice', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png' },
      { id: 92, name: 'Gastly', type: 'Ghost/Poison', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png' },
      { id: 93, name: 'Haunter', type: 'Ghost/Poison', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png' },
      { id: 94, name: 'Gengar', type: 'Ghost/Poison', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png' },
      { id: 95, name: 'Onix', type: 'Rock/Ground', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png' },
      { id: 96, name: 'Drowzee', type: 'Psychic', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png' },
      { id: 97, name: 'Hypno', type: 'Psychic', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png' },
      { id: 98, name: 'Krabby', type: 'Water', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png' },
      { id: 99, name: 'Kingler', type: 'Water', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png' },
      { id: 100, name: 'Exeggcute', type: 'Grass/Psychic', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png' },
    ];

    // Set state with Pokémon data
    this.setState({ pokemonData: samplePokemons });
  }

  handleTypeChange = (event) => {
    this.setState({ filterType: event.target.value });
  };

  render() {
    const { pokemonData, filterType } = this.state;
    
    // Filter the Pokémon based on the selected type
    const filteredPokemons = pokemonData.filter((pokemon) => {
      return filterType === '' || pokemon.type.includes(filterType);
    });

    return (
      <div className="App">
        <h1>Pokémon Display</h1>
        
        {/* Dropdown to filter by Pokémon type */}
        <label htmlFor="typeFilter">Filter by Type:</label>
        <select
          id="typeFilter"
          value={filterType}
          onChange={this.handleTypeChange}
        >
          <option value="">All Types</option>
          <option value="Grass">Grass</option>
          <option value="Fire">Fire</option>
          <option value="Water">Water</option>
          <option value="Electric">Electric</option>
          <option value="Poison">Poison</option>
          <option value="Flying">Flying</option>
          <option value="Fighting">Fighting</option>
          <option value="Normal">Normal</option>
          <option value="Bug">Bug</option>
          <option value="Psychic">Psychic</option>
          <option value="Fairy">Fairy</option>
          <option value="Steel">Steel</option>
          <option value="Ground">Ground</option>
          <option value="Rock">Rock</option>
        </select>

        {/* Display filtered Pokémon */}
        <div className="pokemon-list">
          {filteredPokemons.map((pokemon) => (
            <div key={pokemon.id} className="pokemon-card">
              <img src={pokemon.imageUrl} alt={pokemon.name} />
              <h2>{pokemon.name}</h2>
              <p>Type: {pokemon.type}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;