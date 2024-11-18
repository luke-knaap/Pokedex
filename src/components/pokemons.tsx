import {useEffect, useState} from "react";
import {PokeApi} from "../api/pokeApi";
import {IPokemon} from "../interfaces/IPokemons";
function Pokemons() {
	const [pokemons, setPokemons] = useState<IPokemon[]>([]);
	useEffect(() => {
		async function getPokemons() {
			const data: any = await PokeApi();
			setPokemons(data);
		}
		getPokemons();
	}, []);
	return (
		<div className="pokemons">
			<h1>Pokemons</h1>
			<ul className="pokemons-list">
				{pokemons.map(({name, sprites}) => (
					<li className="pokemon-card" key={name}>
						<p>{name}</p>
						<img src={sprites.front_default} alt={name} />
					</li>
				))}
			</ul>
		</div>
	);
}
export default Pokemons;
