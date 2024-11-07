import {useEffect, useState} from "react";
import {PokeApi} from "../api/pokeApi";
function Pokemons() {
	const [pokemons, setPokemons] = useState<any[]>([]);
	useEffect(() => {
		async function getPokemons() {
			const data = await PokeApi();
			setPokemons(data);
		}
		getPokemons();
	}, []);
	return (
		<div className="pokemons">
			<h1>Pokemons</h1>
			<ul>
				{pokemons.map((pokemon) => (
					<li key={pokemon.name}>
						{pokemon.name} {pokemon.url}
					</li>
				))}
			</ul>
		</div>
	);
}
export default Pokemons;
