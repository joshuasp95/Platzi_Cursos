// Importamos el módulo fetch desde la biblioteca "node-fetch"
import fetch from "node-fetch";

// Hacemos una solicitud para obtener información sobre el Pokémon "Pikachu"
const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");

// Convertimos la respuesta a formato JSON
const pokemons = await response.json();

// Exportamos el objeto de Pokémon para usarlo en otro archivo
export { pokemons };