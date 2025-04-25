using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;

namespace Pokemonbackend_Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Pokedex : ControllerBase
    {
        // 1. GET | Get By Type (via query string)
        [HttpGet("get-by-type")]
        public IActionResult GetByType([FromQuery] string? type)
        {
            if (string.IsNullOrEmpty(type))
                return BadRequest("Type is required.");

            var results = PokemonRepository.GetAllPokemons()
                .Where(p => p.Type != null && p.Type.ToLower().Contains(type.ToLower()))
                .ToList();

            return Ok(results);
        }

        // 2. GET | Search by Name (via query string)
        [HttpGet("search")]
        public IActionResult SearchByName([FromQuery] string? name)
        {
            if (string.IsNullOrEmpty(name))
                return BadRequest("Name is required.");

            var result = PokemonRepository.GetAllPokemons()
                .FirstOrDefault(p => p.Name != null && p.Name.Equals(name, StringComparison.OrdinalIgnoreCase));

            if (result == null)
                return NoContent();

            return Ok(result);
        }

        // 3. POST | Add new Pokémon
        [HttpPost]
        public IActionResult Post([FromBody] Pokemontoh dto)
        {
            try
            {
                PokemonRepository.AddPokemon(dto);
                return Created("", dto);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // 4. PUT | Update Pokémon by name
        [HttpPut]
        public IActionResult Put([FromBody] Pokemontoh dto)
        {
            var pokemons = PokemonRepository.GetAllPokemons();
            var existing = pokemons.FirstOrDefault(p => p.Name != null && p.Name.Equals(dto.Name, StringComparison.OrdinalIgnoreCase));

            if (existing == null)
                return NotFound("Pokemon not found.");

            existing.Imageurl = dto.Imageurl;
            existing.Height = dto.Height;
            existing.Weight = dto.Weight;
            existing.Type = dto.Type;

            return Ok(existing);
        }

        // 5. DELETE | Delete by name (from body or query)
        [HttpDelete]
        public IActionResult Delete([FromQuery] string? name)
        {
            if (string.IsNullOrEmpty(name))
                return BadRequest("Name is required.");

            var pokemons = PokemonRepository.GetAllPokemons();
            var existing = pokemons.FirstOrDefault(p => p.Name != null && p.Name.Equals(name, StringComparison.OrdinalIgnoreCase));

            if (existing == null)
                return NotFound("Pokemon not found.");

            pokemons.Remove(existing);
            return Ok($"Pokemon '{name}' deleted successfully.");
        }
    }
}
