namespace Pokemonbackend_Web
{
    public class WeatherForecast
    {
        public DateOnly Date { get; set; }
        public int TemperatureC { get; set; }
        public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
        public string? Summary { get; set; }
    }

    public class Pokemontoh
    {
        public int Id { get; set; } // <-- Add this
        public string? Name { get; set; }
        public string? Imageurl { get; set; }
        public float? Height { get; set; }
        public float? Weight { get; set; }
        public string? Type { get; set; }
    }

    public static class PokemonRepository
    {
        private static readonly List<Pokemontoh> PokemonList;

        static PokemonRepository()
        {
            PokemonList = new List<Pokemontoh>
        {
            new Pokemontoh { Id = 1, Name = "Charizard", Imageurl = "https://img.pokemondb.net/artwork/charizard.jpg", Height = 1.7f, Weight = 90.5f, Type = "Fire/Flying" },
            new Pokemontoh { Id = 2, Name = "Blastoise", Imageurl = "https://img.pokemondb.net/artwork/blastoise.jpg", Height = 1.6f, Weight = 85.5f, Type = "Water" },
            new Pokemontoh { Id = 3, Name = "Venusaur", Imageurl = "https://img.pokemondb.net/artwork/venusaur.jpg", Height = 2.0f, Weight = 100.0f, Type = "Grass/Poison" },
            new Pokemontoh { Id = 4, Name = "Pikachu", Imageurl = "https://img.pokemondb.net/artwork/pikachu.jpg", Height = 0.4f, Weight = 6.0f, Type = "Electric" },
            new Pokemontoh { Id = 5, Name = "Jigglypuff", Imageurl = "https://img.pokemondb.net/artwork/jigglypuff.jpg", Height = 0.5f, Weight = 5.5f, Type = "Normal/Fairy" },
            new Pokemontoh { Id = 6, Name = "Gengar", Imageurl = "https://img.pokemondb.net/artwork/gengar.jpg", Height = 1.5f, Weight = 40.5f, Type = "Ghost/Poison" },
            new Pokemontoh { Id = 7, Name = "Snorlax", Imageurl = "https://img.pokemondb.net/artwork/snorlax.jpg", Height = 2.1f, Weight = 460.0f, Type = "Normal" },
            new Pokemontoh { Id = 8, Name = "Dragonite", Imageurl = "https://img.pokemondb.net/artwork/dragonite.jpg", Height = 2.2f, Weight = 210.0f, Type = "Dragon/Flying" },
            new Pokemontoh { Id = 9, Name = "Mewtwo", Imageurl = "https://img.pokemondb.net/artwork/mewtwo.jpg", Height = 2.0f, Weight = 122.0f, Type = "Psychic" },
            new Pokemontoh { Id = 10, Name = "Eevee", Imageurl = "https://img.pokemondb.net/artwork/eevee.jpg", Height = 0.3f, Weight = 6.5f, Type = "Normal" },
            new Pokemontoh { Id = 11, Name = "Typhlosion", Imageurl = "https://img.pokemondb.net/artwork/typhlosion.jpg", Height = 1.7f, Weight = 79.5f, Type = "Fire" },
            new Pokemontoh { Id = 12, Name = "Feraligatr", Imageurl = "https://img.pokemondb.net/artwork/feraligatr.jpg", Height = 2.3f, Weight = 88.8f, Type = "Water" },
            new Pokemontoh { Id = 13, Name = "Meganium", Imageurl = "https://img.pokemondb.net/artwork/meganium.jpg", Height = 1.8f, Weight = 100.5f, Type = "Grass" },
            new Pokemontoh { Id = 14, Name = "Umbreon", Imageurl = "https://img.pokemondb.net/artwork/umbreon.jpg", Height = 1.0f, Weight = 27.0f, Type = "Dark" },
            new Pokemontoh { Id = 15, Name = "Espeon", Imageurl = "https://img.pokemondb.net/artwork/espeon.jpg", Height = 0.9f, Weight = 26.5f, Type = "Psychic" },
            new Pokemontoh { Id = 16, Name = "Scizor", Imageurl = "https://img.pokemondb.net/artwork/scizor.jpg", Height = 1.8f, Weight = 118.0f, Type = "Bug/Steel" },
            new Pokemontoh { Id = 17, Name = "Heracross", Imageurl = "https://img.pokemondb.net/artwork/heracross.jpg", Height = 1.5f, Weight = 54.0f, Type = "Bug/Fighting" },
            new Pokemontoh { Id = 18, Name = "Salamence", Imageurl = "https://img.pokemondb.net/artwork/salamence.jpg", Height = 1.5f, Weight = 102.6f, Type = "Dragon/Flying" },
            new Pokemontoh { Id = 19, Name = "Blaziken", Imageurl = "https://img.pokemondb.net/artwork/blaziken.jpg", Height = 1.9f, Weight = 52.0f, Type = "Fire/Fighting" },
            new Pokemontoh { Id = 20, Name = "Sceptile", Imageurl = "https://img.pokemondb.net/artwork/sceptile.jpg", Height = 1.7f, Weight = 52.2f, Type = "Grass" }
        };
        }
        public static List<Pokemontoh> GetAllPokemons()
        {
            return PokemonList;
        }

        public static void AddPokemon(Pokemontoh pokemon)
        {
            PokemonList.Add(pokemon);
        }
    }
}
