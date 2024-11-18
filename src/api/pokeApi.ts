export async function PokeApi() {
	try {
		const pokeapi = await fetch("https://pokeapi.co/api/v2/pokemon?limit=24");
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
		console.log(pokemonInfo);
		return pokemonInfo;
	} catch (error) {
		console.log(error);
	}
}
