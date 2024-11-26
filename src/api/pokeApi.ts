import {Pokemon} from "../classes/pokemon";
import {POKEMON_API_POKEMON_URL} from "../constants/URLS";
export async function PokeApi(url?: string) {
	try {
		const baseUrl = url || POKEMON_API_POKEMON_URL;
		const pokeapi = await fetch(baseUrl);
		const data: any = await pokeapi.json();

		const pokemonInfo = await Promise.all(
			data.results.map(async (pokemon: any) => {
				const pokemonInfo = await fetch(pokemon.url);
				const pokemonData = await pokemonInfo.json();
				return new Pokemon(
					pokemonData.id,
					pokemonData.name,
					pokemonData.types.map((type: any) => type.type.name),
					pokemonData.weight
				);
			})
		);
		const result = {
			pokemonInfo,
			next: data.next,
			previous: data.previous
		};
		console.log(result);
		return result;
	} catch (error) {
		console.log(error);
	}
}
