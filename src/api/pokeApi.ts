import {Pokemon} from "../classes/pokemon";

export async function PokeApi(url?: string) {
	try {
		const baseUrl = url || "https://pokeapi.co/api/v2/pokemon?limit=20";
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
					{
						front_default: pokemonData.sprites.front_default,
						front_shiny: pokemonData.sprites.front_shiny
					},
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
