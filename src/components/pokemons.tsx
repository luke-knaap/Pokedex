import {useEffect, useState} from "react";
import {PokeApi} from "../api/pokeApi";
import Buttons from "./buttons";
import Inputs from "./inputs";
import {Pokemon} from "../classes/pokemon";
import "../styles/pokemonCards.css";
function Pokemons() {
	const [pokemons, setPokemons] = useState<Pokemon[]>([]);
	const [next, setNext] = useState<string>("");
	const [previous, setPrevious] = useState<string>("");
	const [shiny, setShiny] = useState<boolean>(false);

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
				{pokemons.map((pokemon) => {
					const sprites = pokemon.getSprite(shiny);
					return (
						<button className="pokemon-card" key={pokemon.id}>
							<p>{pokemon.getFormattedName()}</p>
							<img src={sprites} alt={pokemon.name} />
							<p>
								{pokemon.types.map((type) => (
									<span
										key={type}
										className="type-badge"
										style={{backgroundColor: pokemon.getTypeColor(type)}}>
										{type.charAt(0).toUpperCase() + type.slice(1)}
									</span>
								))}
							</p>
						</button>
					);
				})}
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
				<Inputs
					label="Shiny"
					type="checkbox"
					value="shiny"
					checked={shiny}
					onChange={() => setShiny(!shiny)}></Inputs>
			</div>
		</div>
	);
}
export default Pokemons;
