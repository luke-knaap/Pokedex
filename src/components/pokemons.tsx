import {useEffect, useState} from "react";
import {PokeApi} from "../api/pokeApi";
import Buttons from "./buttons";
import {IPokemons} from "../interfaces/IPokemons";
import "../styles/pokemonCards.css";
function Pokemons() {
	const [pokemons, setPokemons] = useState<IPokemons[]>([]);
	const [next, setNext] = useState<string>("");
	const [previous, setPrevious] = useState<string>("");

	async function getPokemons(url?: string) {
		const data: any = await PokeApi(url);
		setPokemons(data.pokemonInfo);
		setNext(data.next);
		setPrevious(data.previous);
	}

	useEffect(() => {
		getPokemons();
	}, []);

	return (
		<div className="pokemons">
			<h1>Pokemons</h1>
			<ul className="pokemons-list">
				{pokemons.map(({id, name, sprites}) => (
					<li className="pokemon-card" key={id}>
						<p>{name}</p>
						<img src={sprites.front_default} alt={name} />
					</li>
				))}
			</ul>
			<div className="buttons">
				<Buttons
					label="Previous"
					onClick={() => {
						if (previous) getPokemons(previous);
					}}
					disabled={!previous}
				/>
				<Buttons
					label="Next"
					onClick={() => {
						if (next) getPokemons(next);
					}}
					disabled={!next}
				/>
			</div>
		</div>
	);
}
export default Pokemons;
