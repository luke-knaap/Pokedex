export async function PokeApi() {
	try {
		const pokeapi = await fetch("https://pokeapi.co/api/v2/pokemon?limit=25");
		const data = await pokeapi.json();
		console.log(data.results);
		return data.results;
	} catch (error) {
		console.log(error);
	}
}
