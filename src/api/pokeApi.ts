export async function PokeApi(url?: string) {
	try {
		const baseUrl = url || "https://pokeapi.co/api/v2/pokemon?limit=20";
		const pokeapi = await fetch(baseUrl);
		const data: any = await pokeapi.json();

		const pokemonInfo = await Promise.all(
			data.results.map(async (pokemon: any) => {
				const pokemonInfo = await fetch(pokemon.url);
				const pokemonData = await pokemonInfo.json();
				return {
					id: pokemonData.id,
					name: pokemonData.name,
					sprites: pokemonData.sprites
				};
			})
		);
		const result = {
			pokemonInfo: pokemonInfo,
			next: data.next,
			previous: data.previous
		};
		console.log(result);
		return result;
	} catch (error) {
		console.log(error);
	}
}
